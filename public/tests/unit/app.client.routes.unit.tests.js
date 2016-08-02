describe('Testing App Routing', function () {
    beforeEach(function () {
        module('app');
    });

    it('Should map the weather forecast route', function () {
        inject(function ($route) {
            expect($route.routes['/'].templateUrl).
                toEqual('views/weather.forecast.html');
        });
    });
});