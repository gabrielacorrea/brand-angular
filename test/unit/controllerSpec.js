'use strict';

describe('SearchProductsCtrl', function () {
    var $httpBackend;
    var scope;
    var ctrl;

    beforeEach(module('brandApp'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('/app/resources/products.json').respond([{brand:'Rabush'}]);

        scope = $rootScope.$new();
        ctrl = $controller('SearchProductsCtrl', {$scope: scope});
    }));

    it('should fetch products details', function() {
        expect(scope.productsList).toBeDefined();
        expect(scope.productsList).toEqual({brand:'Rabush'});
    });
});