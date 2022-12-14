const express = require('express');
const fs = require('fs');
const apiRoutes = require('./routes/apiroutes');
const htmlRoutes = require('./routes/htmlroutes');
const path = require('path');
const db = require('./db/db.json');

const PORT = process.env.PORT || 3001;
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)        
);