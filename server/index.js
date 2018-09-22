
const express = require('express');
const app = express();

app.use(express.static('client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/wander/connect', connect);
app.get('/wander/unlock', unlock);
app.get('/wander/lock', lock);
app.get('/wander/location', locate)
app.get('/wander/routes/:destinationId', getRoutesById)
app.get('/wander/routes/new', getRoutesByLocation);

app.listen(3000, () => console.log('Listening at 3000'));
