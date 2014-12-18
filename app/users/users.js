var angular = require('angular');

var usersList = require('./users-list/users-list');

var usersDirective = require('./users-directive');
var UsersController = require('./users-controller');

var users = angular.module('users', [usersList.name]);

users.controller('UsersController', UsersController);
users.directive('users', usersDirective);

module.exports = users;

