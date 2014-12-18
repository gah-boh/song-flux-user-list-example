function usersListDirective() {
    return {
        scope: {},
        controller: 'UserListController',
        controllerAs: 'userListController',
        bindToController: true
    };
}

module.exports = usersListDirective;

