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

    function DeleteUser() {
    }

    return {
        ShowUser: ShowUser,
        SaveUser: SaveUser,
        AddUser: AddUser,
        DeleteUser: DeleteUser
    };

}

module.exports = usersActions;
