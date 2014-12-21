function usersListDirective() {
    return {
        scope: {
            user: '=',
            index: '='
        },
        controller: 'UsersListController',
        controllerAs: 'usersListController',
        bindToController: true,
        templateUrl: 'users/users-list/users-list.html'
    };
}

module.exports = usersListDirective;

