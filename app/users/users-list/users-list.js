var angular = require('angular');

var usersListDirective = require('./users-list-directive');

var usersList = angular.module('usersList', []);

usersList.directive('usersList', usersListDirective);

module.exports = usersList;

