/* global process */

'use strict';

//external dependancies
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//local dependancies
var universityCtrl = require('./controllers/universityCtrl');
var teacherCtrl = require('./controllers/teacherCtrl');
var userCtrl = require('./controllers/userCtrl');
var reviewCtrl = require('./controllers/reviewCtrl');

// CONTROLLERS

// EXPRESS
var app = express();

var port = process.argv[2] || 8080;

//MIDDLEWARE
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

//  ENDPOINTS
app.get('/api/universities', universityCtrl.read);

app.get('/api/teachers', teacherCtrl.read);

app.get('/api/users', userCtrl.read);

app.get('/api/reviews', reviewCtrl.read);

//CONNECTIONS