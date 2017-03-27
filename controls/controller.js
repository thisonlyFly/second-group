/**
 * Created by Administrator on 2017/3/25.
 */

angular.module("controller", [])
    .controller("login", function ($scope,$location) {
        var timer=null,timer1=null,timer2=null;
        var a=new RegExp("^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$","i");
        var b=new RegExp("^[a-zA-Z0-9]{5,19}$");

        //login界面左边部分
        $scope.toEmail=function () {
            $location.path("email");
        }
        $("#eEmail").on("focus",function () {
            clearInterval(timer);
            timer=setInterval(function () {
                var text=$("#eEmail").val();
                if(a.test(text))
                {
                    $("#eEmail").parent().removeClass("has-error");
                    clearInterval(timer);
                }
                else {
                    $("#eEmail").parent().addClass("has-error");
                }
            },500);
        })
        $("#pEmail").on("focus",function () {
            clearInterval(timer1);
            timer1=setInterval(function () {
                var text=$("#pEmail").val();
                if(a.test(text))
                {
                    $("#pEmail").parent().removeClass("has-error");
                    clearInterval(timer1);
                }
                else {
                    $("#pEmail").parent().addClass("has-error");
                }
            },500);
        })
        $("#pPass").on("focus",function () {
            clearInterval(timer2);
            timer2=setInterval(function () {
                var text=$("#pPass").val();
                if(b.test(text))
                {
                    $("#pPass").parent().removeClass("has-error");
                    clearInterval(timer2);
                }
                else {
                    $("#pPass").parent().addClass("has-error");
                }
            },500);
        })



        //login界面右边部分
        $scope.toUser=function () {
            var email=$("#pEmail").val();
            var pass=$("#pPass").val();
            var Json=store.get("user");
            for(var i=0;i<Json.length;i++)
            {
                if(Json.length<0)return;
                if(Json[i].email==email)
                {
                    if(Json[i].pass==pass)
                    {
                        $location.path("user");
                        break;
                    }
                    else {
                        alert("应该是密码错误，请重新输入。。");
                        break;
                    }
                }
                else{
                    alert("没有改用户，请注册!!!!");
                    break;
                }
            }
        }
    })
    .controller("email",function ($scope,$location) {
        var timer0=null;
        clearInterval(timer0);
        timer0=setInterval(function () {
            $("#daysSpan").text($('#days option:selected') .text());
            $("#mouthsSpan").text( $('#months option:selected') .text());
            $("#yearsSpan").text( $('#years option:selected') .text());
        },500);


        var timer=null,timer1=null,timer2=null,timer3=null;
        var a=new RegExp("^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$","i");
        var b=new RegExp("^[a-zA-Z0-9]{5,19}$");
        $("#firstName").on("focus",function () {
            clearInterval(timer);
            timer=setInterval(function () {
                var text=$("#firstName").val();
                if(text)
                {
                    $("#firstName").parent().removeClass("has-error");
                    clearInterval(timer);
                }
                else {
                    $("#firstName").parent().addClass("has-error");
                }
            },500);
        })
        $("#lastName").on("focus",function () {
            clearInterval(timer1);
            timer1=setInterval(function () {
                var text=$("#lastName").val();
                if(text)
                {
                    $("#lastName").parent().removeClass("has-error");
                    clearInterval(timer);
                }
                else {
                    $("#lastName").parent().addClass("has-error");
                }
            },500);
        })
        $("#email").on("focus",function () {
            clearInterval(timer2);
            timer2=setInterval(function () {
                var text=$("#email").val();
                if(a.test(text))
                {
                    $("#email").parent().removeClass("has-error");
                    clearInterval(timer2);
                }
                else {
                    $("#email").parent().addClass("has-error");
                }
            },500);
        })
        $("#pass").on("focus",function () {
            clearInterval(timer3);
            timer3=setInterval(function () {
                var text=$("#pass").val();
                if(b.test(text))
                {
                    $("#pass").parent().removeClass("has-error");
                    clearInterval(timer3);
                }
                else {
                    $("#pass").parent().addClass("has-error");
                }
            },500);
        })


        var Json=[];
        $scope.register=function () {
            if(store.get("user"))
            {
                Json=store.get("user");
            }
            var storeEmail=$("#email").val();
            var storePass=$("#pass").val();
            var obj={};
            obj.email=storeEmail;
            obj.pass=storePass;
            Json.push(obj);
            store.set("user",Json);
            $("#email").val("");
            $("#pass").val("");
            alert("注册成功，你可以登陆了！！！");
            $location.path("login");
        }

    })
