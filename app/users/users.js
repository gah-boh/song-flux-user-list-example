var angular = require('angular');

var usersContext = require('./users-context/users-context');
var usersListItem = require('./users-list-item/users-list-item');
var userDetail = require('./user-detail/user-detail');

var usersDirective = require('./users-directive');

var users = angular.module('users', [usersContext.name, usersListItem.name, userDetail.name]);

users.directive('users', usersDirective);

module.exports = users;

