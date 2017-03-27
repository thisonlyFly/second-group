/**
 * Created by Administrator on 2017/3/25.
 */

angular.module("SC-Login", ["ngRoute","controller","service"])

    .config(function ($routeProvider) {

        $routeProvider
            .when('/',{
                templateUrl:'template/login-login.html',
                controller:"login"
            })
            .when('/login', {
                templateUrl: 'template/login-login.html',
                controller:'login'
            })
            .when("/user",{
                templateUrl:"template/user.html",
                controller:"user"
            })
            .when("/email",{
                templateUrl:"template/login-email.html",
                controller:"email"
            })
            .otherwise({redirectTo:'/'});
    })

