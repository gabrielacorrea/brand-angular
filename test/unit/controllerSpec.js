'use strict';

describe('SearchProductsCtrl', function () {
    var $httpBackend;
    var scope;
    var ctrl;

    beforeEach(module('brandApp'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('/app/resources/products.json').respond([{brand:'Rabush'}]);

        scope = $rootScope.$new();
        ctrl = $controller('PhoneDetailCtrl', {$scope: scope});
    }));


    it('should fetch phone detail', function() {
        expect(scope.brand).toBeUndefined();
        $httpBackend.flush();
        expect(scope.phone).toEqual({brand:'Rabush'});
    });

});