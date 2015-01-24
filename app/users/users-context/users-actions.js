var angular = require('angular');

function usersActions() {

    function ShowUser(index) {
        this.index = index;
    }

    function SaveUser(user) {
        this.user = user;
    }

    function AddUser() {
    }

    return {
        ShowUser: ShowUser,
        SaveUser: SaveUser,
        AddUser: AddUser,
    };

}

module.exports = usersActions;
