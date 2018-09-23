const {  clientId, clientSecret  } = require('./secrets.js');
//const { nearBySearchFunc } = require('./NearBySearch.js');
const { users, frequentPlaces } = require('./sampleData.js');
const { getMidPoint, getRandomPlaceType } = require('./utils.js');

const smartcar = require('smartcar');
const superagent = require('superagent');

const client = new smartcar.AuthClient({
  clientId: clientId,
  clientSecret: clientSecret,
  redirectUri: 'http://localhost:3000/callback',
  scope: ['read_vehicle_info', 'read_location', 'control_security'],
  testMode: true,
});


const authenticate = (req, res) => {

	if (req.session.access){
		console.log('Starting from prior session...')
		let { expiration, refreshToken } = req.session.access;
		console.log(req.session)
		// if (smartcar.isExpired(expiration)){
		// 	console.log('Acquiring new access...')
		// 	client.exchangeRefreshToken(refreshToken)
		// 		.then((newAccess) => {
		// 			req.session.access = newAccess;
		// 		})
		// 		.then(() => res.redirect('/wander/vehicles'))
		// } else {
			res.send({status: "success"})
		//}

	} else {
		console.log('Starting new session...')
		//res.send({status: "failed", authUrl: client.getAuthUrl()})
		res.redirect(client.getAuthUrl())
	}
}

const initializeNewSession = (req, res) => {
  //TODO: test handler 
	let { code } = req.query;

	if (code) {
		client.exchangeCode(code)
		.then(access => {
	  	smartcar.getUserId(access.accessToken)
			.then(userId => {
				smartcar.getVehicleIds(access.accessToken)
				.then(({vehicles}) => {
					req.session = { 
			  		access: access, 
			  		vehicles: vehicles,
			  		userId: userId
			  	}
			  	console.log(req.session)
			  	res.redirect('/')
				})
  		})
	  })
	} else {
		res.end()
	}
}

const getVehicles = (req, res) => {
  console.log('current session: ' , req.session)
  res.send({data: req.session.vehicles})
}

const handleVehicleRequest = (req, res) => {
	let { vehicleId, request } = req.params;
	let { accessToken } = req.session.access;
	let car = new smartcar.Vehicle(vehicleId, accessToken);

	switch (request) {
		case 'info':
			car.info()
			  .then(data => res.send(data));
			break;
		case 'unlock':
		//also need to post location
		  car.unlock()
		    .then((response, err) => res.send(err || {status: "success"}));
		  break;
		case 'lock':
			car.lock()
				.then((response, err) => res.send(err || {status: "success"}));
			break;
		case 'locate':
			car.location().then(response => res.send(response));
			break;
		default:
			res.status(404).end();
	}
}

const getFrequentDestinations = (req, res) => {
	let userId = req.session.userId;
	//get user's frequently visited destinations by id from DB

	res.send({results: users[userId].frequentPlaces})

}

const getSuggestions = (req, res) => {
	let { start, end } = req.params;
	let mid = getMidPoint(start, end);

	let url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json";
	let query = {
		key: 'AIzaSyA8RCZUo52VwY0zWiEVT0YRROmsz0tHuvg',
		location: start,
		radius: 2000,
		type: getRandomPlaceType()
	}

	superagent.get(url).query(query)
		.then(response => JSON.parse(response.text).results[0])
		.then((suggestionNearStart) => {
			query.location = mid;
			query.type = getRandomPlaceType();
			superagent.get(url).query(query)
			.then(response => JSON.parse(response.text).results[0])
			.then((suggestionNearMid) => {
				query.location = end;
				query.type = getRandomPlaceType();
				superagent.get(url).query(query)
				.then(response => JSON.parse(response.text).results[0])
				.then((suggestionNearEnd) => res.send({results: [suggestionNearStart, suggestionNearMid, suggestionNearEnd]}))
			})
		})

}

// const getRoutesByDestinationId = (req, res) => {
// 	//randomly generate a new place to visit that is enroute to destination
//   res.send({results: "endpoint in development"})
// }

// const getRoutesByLocation = (req, res) => {
// 	//get route to specified address and generate a new place to visit enroute
// 	res.send({ results: "endpoint in development"})
// }

// const getPlacesNearby = (req, res) => {
//   const parameters = {
//     location: [req.params.lat, req.params.long],
//     keyword: req.params.keyword,
//   };
//   nearBySearchFunc(parameters, result => res.send(result));
// };

module.exports = {
	authenticate,
	initializeNewSession,
	getVehicles,
	handleVehicleRequest,
	getFrequentDestinations,
	// getRoutesByDestinationId,
	// getRoutesByLocation,
	getSuggestions,
	//getPlacesNearby
}



