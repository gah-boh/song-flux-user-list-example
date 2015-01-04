var angular = require('angular');

function usersActions() {

    function ShowUser(index) {
        this.index = index;
    }

    function SaveUser(index, user) {
        this.index = index;
        this.user = user;
    }

    return {
        ShowUser: ShowUser,
        SaveUser: SaveUser
    };

}

module.exports = usersActions;
