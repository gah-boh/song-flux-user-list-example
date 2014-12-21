function userDetailDirective() {

    return {
        restrict: 'EA',
        scope: {
        },
        controller: 'UserDetailController',
        controllerAs: 'userDetailController',
        bindToController: true,
        templateUrl: 'users/user-detail/user-detail.html'
    };

}

module.exports = userDetailDirective;
