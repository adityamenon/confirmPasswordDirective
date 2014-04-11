define(function() {

  var module = angular.module('imageUploadDirective');

  module.directive('confirmPassword', function () {
      return {
        'restrict': 'A',
        'scope': {
          'verifyAgainstField': '@'
        },
        'require': '^form',
        'compile': function (tElement, tAttrs) {
          return function (scope, element, attrs, formController, modelController) {

            if (! scope.verifyAgainstField) return false;

            var fieldValidity;

            element.on('input', function () {

              var confirmPasswordValue = element.val(),
                  passwordFieldValue   = formController[scope.verifyAgainstField].$modelValue;

              if (confirmPasswordValue !== passwordFieldValue) fieldValidity = false;
              else fieldValidity = true;
              
              formController[attrs.name].$setValidity(attrs.name, fieldValidity);
              scope.$apply();

            });

          }
        }
      };
    });

});