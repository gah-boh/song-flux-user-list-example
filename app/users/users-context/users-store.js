var _ = require('lodash');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

function userStore(songFactory, usersActions) {
    var dispatcher = songFactory.getDispatcher('users');
    var eventEmitter = new EventEmitter();

    var usersList = [{
        name: 'John Doe',
        gender: 'm'
    },
    {
        name: 'Jane Doe',
        gender: 'f'
    },
    {
        name: 'Katie Cat',
        gender: 'f'
    }];
    var currentUserIndex;

    function userSelected(payload) {
        currentUserIndex = payload.index;
        eventEmitter.emit(CHANGE_EVENT);
    }

    function saveUser(payload) {
        var user = payload.user;
        usersList[currentUserIndex] = user;
        eventEmitter.emit(CHANGE_EVENT);
    }

    function addUser() {
        var newUser = {
            name: 'New User',
            gender: ''
        };
        usersList.push(newUser);
        currentUserIndex = usersList.length - 1;
        eventEmitter.emit(CHANGE_EVENT);
    }

    var dispatcherIndices = {
        showUser: dispatcher.register(usersActions.ShowUser, function(payload) {
            userSelected(payload);
        }),
        saveUser: dispatcher.register(usersActions.SaveUser, function(payload) {
            saveUser(payload);
        }),
        addUser: dispatcher.register(usersActions.AddUser, function() {
            addUser();
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
