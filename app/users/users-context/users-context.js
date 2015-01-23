var angular = require('angular');

var songFlux = require('song-flux');
var songOAction = require('song-flux/decorators/o-action');

var usersStore = require('./users-store');
var usersActions = require('./users-actions');

var usersFlux = angular.module('usersFlux', [songFlux.name, songOAction.name]);

usersFlux.factory('usersStore', usersStore);
usersFlux.factory('usersActions', usersActions);

module.exports = usersFlux;

