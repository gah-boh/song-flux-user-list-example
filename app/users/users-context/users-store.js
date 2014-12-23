var _ = require('lodash');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

function userStore(songDispatcherFactory, usersConstants) {
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
    }

    function saveUser(payload) {
        var user = payload.user;
        var index = payload.index;
        usersList[currentUserIndex] = user;
    }

    // This can be done with a helper, maybe someone wrote one
    // or roll out my own to create an object with complex
    // properties object easier.
    var actionMatcher = {};
    actionMatcher[usersConstants.SHOW_USER] = userSelected;
    actionMatcher[usersConstants.SAVE_USER] = saveUser;

    var store =  _.extend({
        getUsers: function() {
            return _.cloneDeep(usersList);
        },

        getCurrentUser: function() {
            return currentUserIndex !== null ? _.cloneDeep(usersList[currentUserIndex]) : null;
        },

        addChangeListener: function(callback) {
            eventEmitter.on(CHANGE_EVENT, callback);
        },

        emitChange: function() {
            eventEmitter.emit(CHANGE_EVENT);
        },

        removeChangeListener: function(callback) {
            eventEmitter.removeListener(CHANGE_EVENT, callback);
        },

        dispatcherIndex: dispatcher.register(function(payload) {
            var action = payload.actionType;

            // This can probably be extracted in some utility also.
            if(!actionMatcher.hasOwnProperty(action)) return;
            actionMatcher[action](_.omit(payload, 'actionType')); // Don't like this at all
            store.emitChange();
        })

    }, EventEmitter.prototype);

    return store;
}

module.exports = userStore;
