var angular = require('angular');

var usersContext = require('./users-context/users-context');
var usersList = require('./users-list/users-list');
var userDetail = require('./user-detail/user-detail');

var usersDirective = require('./users-directive');

var users = angular.module('users', [usersContext.name, usersList.name, userDetail.name]);

users.directive('users', usersDirective);

module.exports = users;

