var angular = require('angular');
var usersFlux = require('../users-flux/users-flux');

var userDetailDirective = require('./user-detail-directive');

var userDetail = angular.module('userDetail', [usersFlux.name]);

userDetail.directive('userDetail', userDetailDirective);

module.exports = userDetail;

