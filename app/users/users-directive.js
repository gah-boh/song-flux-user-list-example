function usersDirective() {

    return {
        scope: {},
        controller: UsersController,
        controllerAs: 'state',
        bindToController: true,
        templateUrl: 'users/users.html'
    };

}

function UsersController($scope, usersStore) {
    this.usersStore = usersStore;
    this.getUserData();

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

module.exports = usersDirective;

