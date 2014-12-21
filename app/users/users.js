var angular = require('angular');

var usersFlux = require('./users-flux/users-flux');
var usersList = require('./users-list/users-list');
var userDetail = require('./user-detail/user-detail');

var usersDirective = require('./users-directive');

var users = angular.module('users', [usersFlux.name, usersList.name, userDetail.name]);

users.directive('users', usersDirective);

module.exports = users;

