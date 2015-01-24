function usersDirective() {

    return {
        scope: {},
        controller: UsersController,
        controllerAs: 'usersController',
        bindToController: true,
        templateUrl: 'users/users.html'
    };

}

function UsersController($scope, usersStore, usersActions, songFactory) {
    this.usersStore = usersStore;
    this.getUserData();
    this.addUserAction = songFactory.createAction(usersActions.AddUser, 'users');

    // This is ugly... need to do better.
    var boundGetUserData = this.getUserData.bind(this);
    usersStore.addChangeListener(boundGetUserData);
    $scope.$on('$destroy', function() {
        usersStore.removeChangeListener(boundGetUserData);
    });
}

UsersController.prototype.getUserData = function() {
	this.users = this.usersStore.getUsers();
};

UsersController.prototype.addUser = function() {
    this.addUserAction().dispatch();
};

module.exports = usersDirective;

