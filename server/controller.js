const {  clientId, clientSecret  } = require('./secrets.js');
const smartcar = require('smartcar');

const mockAccessToken = 'a5a735b9-294d-4e2a-92f6-8419588af373' ;
const mockRefreshToken = '7b555c09-dd68-4449-adeb-16790d4099ac';
let mockVehicle = null;

const client = new smartcar.AuthClient({
  clientId: clientId,
  clientSecret: clientSecret,
  redirectUri: 'http://localhost:3000/callback',
  scope: ['read_vehicle_info', 'read_location', 'control_security'],
  development: true, 
  testMode: true,
});
 

const getVehicle = () => {
	return smartcar.getVehicleIds(mockAccessToken).then(response => {
    mockVehicle = new smartcar.Vehicle(response.vehicles[0], mockAccessToken);
    return mockVehicle.info();
	}).then((data) => {
		console.log("new car: ", data);
	})
}

getVehicle();

const unlock = (req, res) => {
  mockVehicle.unlock()
  	.then(response => res.send({data: "Vehicle unlocked: "+ response}))
}

const lock = (req, res) => {
	mockVehicle.lock()
		.then(response => res.send({data: "Vehicle locked: " +response}));

}

const locate = (req, res) => {
	mockVehicle.location()
		.then(response => {
			console.log(typeof response, response )
			res.send(response)
		})

}

const getDestinationsBy

const getRoutesById = (req, res) => {
	var results = {
		results:
		[
			{

			}

		]
	}
  res.send()
}

const getRoutesByLocation = (req, res) => {

}

module.exports = {
	connect, 
	handlePostAuth,
	getVehicle,
	unlock, 
	lock, 
	locate, 
	getRoutesById,
	getRoutesByLocation
}
