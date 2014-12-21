function usersListDirective() {
    return {
        scope: {
            user: '=',
            index: '='
        },
        controller: UsersListController,
        controllerAs: 'usersListController',
        bindToController: true,
        templateUrl: 'users/users-list/users-list.html'
    };
}

function UsersListController(usersActions) {
    this.usersActions = usersActions;
}

UsersListController.prototype.userSelected = function() {
    this.usersActions.showUser(this.index);
};


module.exports = usersListDirective;

