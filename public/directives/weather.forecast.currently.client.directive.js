(function(angular) {
  'use strict';

angular
    .module('app')
    .directive('weatherForecastCurrently', weatherForecastCurrently);

/**
 * A directive that presents the current weather data
 */
function weatherForecastCurrently() {
    var directive = {
        templateUrl: '/directives/weather.forecast.currently.client.directive.html',
        restrict: 'EA',
        link: link,
        scope: {
            forecastData: '=',
            degree: '=',
            showIcon: '=',
            showSummary: '='
        },
        controller: WeatherForecastCurrentlyController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;

    function link(scope, element, attrs) {
    }
}
/**
 * A directive controller
 */
function WeatherForecastCurrentlyController() {
}

})(window.angular);