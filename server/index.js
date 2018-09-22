const express = require('express');
const app = express();

app.use(express.static('dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.post('/wander/connect', ()=>console.log('handler'));
// app.get('/wander/unlock', ()=>console.log('handler'));
// app.get('/wander/lock',()=>console.log('handler') );
// app.get('/wander/location', ()=>console.log('handler'))
// app.get('/wander/routes/:destinationId',()=>console.log('handler') )
// app.get('/wander/routes/new', ()=>console.log('handler'));

app.listen(3000, () => console.log('Listening at 3000'));
