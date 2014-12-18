function usersDirective() {

    return {
        scope:{},
        controller: 'UsersController',
        controllerAs: 'usersController',
        bindToController: true
    };

}

module.exports = usersDirective;

