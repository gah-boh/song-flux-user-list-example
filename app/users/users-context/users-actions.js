function usersActions(songDispatcherFactory) {

    var dispatcher = songDispatcherFactory.getDispatcher('users');

    function ShowUser(index) {
        this.index = index;
        dispatcher.dispatch(this);
    }
    function SaveUser(index, user) {
        this.index = index;
        this.user = user;
        dispatcher.dispatch(this);
    }

    return {
        ShowUser: ShowUser,
        SaveUser: SaveUser
    };

}

module.exports = usersActions;
