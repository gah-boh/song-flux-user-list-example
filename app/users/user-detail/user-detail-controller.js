function UserDetailController(usersStore, usersActions, $scope) {
    this.usersStore = usersStore;
    this.usersActions = usersActions;
    this.user = null;

    this.getUser();

    // Again, this needs to be made cleaner...
    var boundGetUser = this.getUser.bind(this);
    usersStore.addChangeListener(boundGetUser);
    $scope.$on('$destroy', function() {
        usersStore.removeChangeListener(boundGetUser);
    });
}

UserDetailController.prototype.getUser = function() {
    this.user = this.usersStore.getCurrentUser();
};

UserDetailController.prototype.saveUser = function() {
    this.usersActions.saveUser(this.index, this.user);
};

module.exports = UserDetailController;

