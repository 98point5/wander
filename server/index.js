
const {
	connect, 
	handlePostAuth,
	getVehicle,
	unlock, 
	lock, 
	locate, 
	getRoutesById,
	getRoutesByLocation
} = require('./controller.js');


const express = require('express');
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static('client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/wander/connect', connect);
app.get('/wander/callback', handlePostAuth);
app.get('/wander/test', getVehicle);
app.get('/wander/unlock', unlock);
app.get('/wander/lock', lock);
app.get('/wander/location', locate)
app.get('/wander/routes/:destinationId', getRoutesById)
app.get('/wander/routes/new', getRoutesByLocation);

app.listen(3000, () => console.log('Listening at 3000'));
