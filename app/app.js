var angular = require('angular');
var router = require('ui-router');

var users = require('./users/users');

var AppController = require('./app-controller');

var app = angular.module('app', [users.name]);

app.controller('AppController', AppController);

