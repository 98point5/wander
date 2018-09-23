const {
	authenticate,
	initializeNewSession,
	getVehicles,
	handleVehicleRequest,
	getFrequentDestinations,
	getRoutesByDestinationId,
	getRoutesByLocation,
	getPlacesNearby,
	getSuggestions
} = require('./controller.js');

const express = require('express');
const session = require('cookie-session');
const app = express();

app.use(session({
	name: 'demo',
	secret: 'secret'
}))
app.use(express.static('client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/wander/auth', authenticate);
app.get('/callback', initializeNewSession);
app.get('/wander/vehicles', getVehicles);
app.get('/wander/vehicles/:vehicleId/:request', handleVehicleRequest);
app.get('/wander/user/my_destinations', getFrequentDestinations);
// app.get('/wander/user/routes/:destinationId', getRoutesByDestinationId);
// app.get('/wander/user/routes/new', getRoutesByLocation);
//app.get('/wander/users/:userId/suggestions/location/:lat,:long/:keyword', getPlacesNearby);
app.get('/wander/suggestions/:start/:end', getSuggestions);

app.listen(3000, () => console.log('Listening at 3000'));
