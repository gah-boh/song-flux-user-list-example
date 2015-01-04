function userDetailDirective() {

    return {
        restrict: 'EA',
        scope: {
        },
        controller: UserDetailController,
        controllerAs: 'state',
        bindToController: true,
        templateUrl: 'users/user-detail/user-detail.html'
    };

}

function UserDetailController(usersStore, usersActions, songFactory, $scope) {
    this.usersStore = usersStore;
    this.saveAction = songFactory.createAction(usersActions.SaveUser, 'users');
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
    this.saveAction(this.index, this.user).dispatch();
};

module.exports = userDetailDirective;
