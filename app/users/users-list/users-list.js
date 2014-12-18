var angular = require('angular');

var UsersListController = require('./users-list-controller');
var usersListDirective = require('./users-list-directive');

var usersList = angular.module('usersList', []);

usersList.controller('UsersListController', UsersListController);
usersList.directive('usersList', usersListDirective);

module.exports = usersList;

