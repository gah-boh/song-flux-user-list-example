var angular = require('angular');

var usersListItemDirective = require('./users-list-item-directive');

var usersList = angular.module('usersList', []);

usersList.directive('usersListItem', usersListItemDirective);

module.exports = usersList;

