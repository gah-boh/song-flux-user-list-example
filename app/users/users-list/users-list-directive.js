function usersListDirective() {
    return {
        scope: {
            user: '=',
            index: '='
        },
        controller: UsersListController,
        controllerAs: 'state',
        bindToController: true,
        templateUrl: 'users/users-list/users-list.html'
    };
}

function UsersListController(songFactory, usersActions) {
    this.showUserActionFactory = songFactory.createAction(usersActions.ShowUser, 'users');
}

UsersListController.prototype.userSelected = function() {
    this.showUserActionFactory(this.index).dispatch();
};


module.exports = usersListDirective;

