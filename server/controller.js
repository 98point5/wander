const {
	clientId,
	clientSecret
} = require('./secrets.js');
const smartcar = require('smartcar');

const client = new smartcar.AuthClient({
  clientId: clientId,
  clientSecret: clientSecret,
  redirectUri: 'http://localhost:3000/callback',
  scope: ['read_vehicle_info', 'read_location', 'control_security'],
  testMode: true,
});

 
const connect = (req, res) => {
	const link = client.getAuthUrl({state: 'MY_STATE_PARAM'});

  // redirect to the link
  res.redirect(link);
}

const handlePostAuth = (req, res) => {
  let access;

  if (req.query.error) {
    // the user denied your requested permissions
    return next(new Error(req.query.error));
  }

  // exchange auth code for access token
  return client.exchangeCode(req.query.code)
    .then(function(_access) {
      // in a production app you'll want to store this in some kind of persistent storage
      access = _access;
      // get the user's vehicles
      return smartcar.getVehicleIds(access.accessToken);
    })
    .then(function(res) {
      // instantiate first vehicle in vehicle list
      const vehicle = new smartcar.Vehicle(res.vehicles[0], access.accessToken);
      // get identifying information about a vehicle
      return vehicle.info();
    })
    .then(function(data) {
      console.log(data);
      // {
      //   "id": "36ab27d0-fd9d-4455-823a-ce30af709ffc",
      //   "make": "TESLA",
      //   "model": "Model S",
      //   "year": 2014
      // }

      // json response will be sent to the user
      res.json(data);
    });

}

const unlock = (req, res) => {

}

const lock = (req, res) => {

}

const locate = (req, res) => {

}

const getRoutesById = (req, res) => {

}

const getRoutesByLocation = (req, res) => {

}

module.exports = {
	connect, 
	handlePostAuth,
	unlock, 
	lock, 
	locate, 
	getRoutesById,
	getRoutesByLocation
}
