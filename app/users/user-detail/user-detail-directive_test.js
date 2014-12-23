describe('User Detail Directive', function() {

    var angular = require('angular');
    var mock = angular.mock;
    var userDetail = require('./user-detail');
    var users = require('../users');
    var userDetailDirective = require('./user-detail-directive');

    var sut;
    var $scope;
    var usersStoreMock;

    beforeEach(mock.module(users.name));
    beforeEach(mock.module(userDetail.name));
    beforeEach(mock.module('templates'));

    beforeEach(mock.module(function($provide) {
        usersStoreMock = jasmine.createSpyObj('usersStore', ['addChangeListener', 'removeChangeListener', 'getCurrentUser']);
        $provide.value('usersStore', usersStoreMock);
    }));

    beforeEach(mock.inject(function($compile, $rootScope) {
        $scope = $rootScope;
        var element = angular.element('<user-detail></user-detail>');
        $compile(element)($scope);
        $scope.$digest();
        sut = element.isolateScope().state;
    }));

    describe('getUser', function() {

        it('should call usersStore.getCurrentUser', function() {
            sut.getUser();
            expect(usersStoreMock.getCurrentUser).toHaveBeenCalled();
        });

    });

});
