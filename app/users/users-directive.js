function usersDirective() {

    return {
        scope: {},
        controller: 'UsersController',
        controllerAs: 'usersController',
        bindToController: true,
        templateUrl: 'users/users.html'
    };

}

module.exports = usersDirective;

