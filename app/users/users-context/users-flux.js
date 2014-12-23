var angular = require('angular');

var songDispatcher = require('song-dispatcher');

var usersConstants = require('./users-constants');
var usersStore = require('./users-store');
var usersActions = require('./users-actions');

var usersFlux = angular.module('usersFlux', [songDispatcher.name]);

usersFlux.factory('usersConstants', usersConstants);
usersFlux.factory('usersStore', usersStore);
usersFlux.factory('usersActions', usersActions);

module.exports = usersFlux;
