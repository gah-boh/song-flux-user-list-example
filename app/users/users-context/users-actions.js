var angular = require('angular');

function usersActions() {

    function ShowUser(index) {
        this.index = index;
    }

    function SaveUser(user) {
        this.user = user;
    }

    return {
        ShowUser: ShowUser,
        SaveUser: SaveUser
    };

}

module.exports = usersActions;
