var angular = require('angular');

var userDetailDirective = require('./user-detail-directive');
var UserDetailController = require('./user-detail-controller');

var userDetail = angular.module('userDetail', []);

userDetail.directive('userDetail', userDetailDirective);
userDetail.controller('UserDetailController', UserDetailController);

module.exports = userDetail;

