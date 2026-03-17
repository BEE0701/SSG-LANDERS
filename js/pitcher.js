$(function(){
        $("#nav>li").mouseover(function(){
        $(".isNav").removeClass("slideDown")
        $(this).find(".isNav").css("display","flex")
        $(this).find(".isNav").addClass("slideDown")
    })
    $("#nav>li").mouseout(function(){
        $(".isNav").removeClass("slideDown")
    });
      $("#menu-bar").click(function(){
        $("#sub-menu").show();
        $("body").addClass("menu-open")
        setTimeout(function(){
            $("#sub-menu-bar .home").addClass("right");
            $("header #logo").removeClass("left")
        }, 10);
    });
    $("#sub-menu-bar .cancle").click(function(){
        $("#sub-menu-bar .home").removeClass("right");
        $("body").removeClass("menu-open")
        setTimeout(function(){
            $("#sub-menu").hide();
            $("header #logo").addClass("left")
        }, 10)
    })

   
    $(".cancle").click(function(){
        $("#sub-menu").hide();
    });
       $("#sub-menu-left li").click(function (e) {
        e.preventDefault();

        let i = $(this).index();
        $(this).addClass("active")
            .siblings()
            .removeClass("active")
        $(".sub-submenu").hide();
        $(".sub-submenu").eq(i).show();
    });
    $(".cancle").click(function(){
        $("#sub-menu").hide();
    })

})