var _ = require('lodash');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

function userStore(songDispatcherFactory, usersActions) {
    var dispatcher = songDispatcherFactory.getDispatcher('users');
    var eventEmitter = new EventEmitter();

    var usersList = [
        {
            name: 'John Doe'
        },
        {
            name: 'Jane Doe'
        }
    ];
    var currentUserIndex;

    function userSelected(payload) {
        currentUserIndex = payload.index;
        eventEmitter.emit(CHANGE_EVENT);
    }

    function saveUser(payload) {
        var user = payload.user;
        var index = payload.index;
        usersList[currentUserIndex] = user;
        eventEmitter.emit(CHANGE_EVENT);
    }

    var dispatcherIndices = {
        showUser: dispatcher.register(usersActions.ShowUser, function(payload) {
            userSelected(payload);
        }),
        saveUser: dispatcher.register(usersActions.SaveUser, function(payload) {
            saveUser(payload);
        })
    };

    return {
        getUsers: function() {
            return _.cloneDeep(usersList);
        },

        getCurrentUser: function() {
            return currentUserIndex !== null ? _.cloneDeep(usersList[currentUserIndex]) : null;
        },

        addChangeListener: function(callback) {
            eventEmitter.on(CHANGE_EVENT, callback);
        },

        removeChangeListener: function(callback) {
            eventEmitter.removeListener(CHANGE_EVENT, callback);
        },

        dispatcherIndices: function() {
            return dispatcherIndices;
        }
    };

}

module.exports = userStore;
