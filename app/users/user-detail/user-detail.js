var angular = require('angular');
var usersContext = require('../users-context/users-context');

var userDetailDirective = require('./user-detail-directive');

var userDetail = angular.module('userDetail', [usersContext.name]);

userDetail.directive('userDetail', userDetailDirective);

module.exports = userDetail;

