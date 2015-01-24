function usersListDirective() {
    return {
        scope: {
            user: '=',
            index: '='
        },
        controller: UserListItemController,
        controllerAs: 'userListItemController',
        bindToController: true,
        templateUrl: 'users/users-list-item/users-list-item.html'
    };
}

function UserListItemController(songFactory, usersActions) {
    this.showUserActionFactory = songFactory.createAction(usersActions.ShowUser, 'users');
    this.deleteUserAction = songFactory.createAction(usersActions.DeleteUser, 'users');
}

UserListItemController.prototype.userSelected = function() {
    this.showUserActionFactory(this.index).dispatch();
};

UserListItemController.prototype.deleteUser = function() {
    this.deleteUserAction(this.index).dispatch();
};


module.exports = usersListDirective;

