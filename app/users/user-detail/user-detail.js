var angular = require('angular');

var userDetailDirective = require('./user-detail-directive');

var userDetail = angular.module('userDetail', []);

userDetail.directive('userDetail', userDetailDirective);

module.exports = userDetail;

