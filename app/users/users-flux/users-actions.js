function usersActions(usersConstants, songDispatcherFactory) {

    var dispatcher = songDispatcherFactory.getDispatcher('users');

    return {
        showUser: function(index) {
            dispatcher.dispatch({
                actionType: usersConstants.SHOW_USER,
                index: index
            });
        },
        saveUser: function(index, user) {
            dispatcher.dispatch({
                actionType: usersConstants.SAVE_USER,
                index: index,
                user: user
            });
        },
        deleteUser: function() {},
    };

}

module.exports = usersActions;
