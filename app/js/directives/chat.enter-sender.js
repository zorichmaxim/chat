/**
 * Created by 123 on 20.10.2016.
 */
    function enterSender(){
        return function(scope, elements, attrs){
            elements.bind('keydown keypress',function(event){
                if(event.which === 13){
                    scope.$apply(function(){
                        scope.$eval(attrs.enterSender);
                    });

                    event.preventDefault();
                }
            })
        }
}

    angular.module('cbsChat')
        .directive('enterSender',[enterSender]);