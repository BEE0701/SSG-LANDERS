$(function () {
    $("#nav>li").mouseover(function () {
        $(".isNav").removeClass("slideDown")
        $(this).find(".isNav").css("display", "flex")
        $(this).find(".isNav").addClass("slideDown")
    })
    $("#nav>li").mouseout(function () {
        $(".isNav").removeClass("slideDown");
    })

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

    $("#close").click(function(){
        $(".home").removeClass("right")
    })
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

    // 네비게이션 jquery


    $(window).on('scroll', function () {
        let conBoxTop = $("#content1").offset().top;

        let windowTop = $(window).scrollTop();


        if (windowTop >= conBoxTop - 400) {

            $(".con-box").eq(0).css({ "transform": "translateY(-100px)" });

        } else if (windowTop < conBoxTop - 400) {

            $(".con-box").eq(0).css({ "transform": "translateY(100px)" })
        }
        if (windowTop >= conBoxTop - 400) {

            $(".con-box").eq(1).css({
                "transform": "translateY(-300px)"

            });

        } else if (windowTop < conBoxTop - 400) {

            $(".con-box").eq(1).css({
                "transform": "translateY(-100px)"

            })
        }
        if (windowTop >= conBoxTop - 400) {

            $(".con-box").eq(2).css({
                "transform": "translateY(-500px)"

            });

        } else if (windowTop < conBoxTop - 400) {

            $(".con-box").eq(2).css({
                "transform": "translateY(-300px)"

            })
        }
        let time = 300;
        let playerImg = $("#player-img").offset().top;



        $(".img-box").each(function (index) {
            let imgBox = $(this)
            let delayed = index * time;
            setTimeout(function () {
                if (windowTop >= playerImg - 400) {
                    $(imgBox).addClass("flip");

                } else if (playerImg >= windowTop) {
                    $(imgBox).removeClass("flip");
                }
            }, index * 200)

        })

    })



})
