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

function UsersListController(usersActions) {
    this.usersActions = usersActions;
}

UsersListController.prototype.userSelected = function() {
    new this.usersActions.ShowUser(this.index);
};


module.exports = usersListDirective;

