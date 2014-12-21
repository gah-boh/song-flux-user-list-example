function UsersListController(usersActions) {
    this.usersActions = usersActions;
}

UsersListController.prototype.userSelected = function() {
    this.usersActions.showUser(this.index);
};

module.exports = UsersListController;

