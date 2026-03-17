$(function(){
       $("#nav>li").mouseover(function(){
        $(".isNav").removeClass("slideDown")
        $(this).find(".isNav").css("display","flex")
        $(this).find(".isNav").addClass("slideDown")
    })
    $("#nav>li").mouseout(function(){
        $(".isNav").removeClass("slideDown")
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

   
    $(".cancle").click(function(){
        $("#sub-menu").hide();
    });
    $(window).scroll(function(){
        let scrollTop = $(this).scrollTop();
        let vision = $("#vision").offset().top;
        if(scrollTop >= vision){

            $("#vision>div").addClass("sizeUp")
        }else if(scrollTop <= vision){
            $("#vision>div").removeClass("sizeUp")
        }
        let croup =$("#croup").offset().top;
        if(scrollTop >= croup){
            $("span").each(function(){
                let span =$(this);
                let target = Number(span.data("target"));
                $({count :0}).animate(
                    {count:target},
                    {
                        duration:1500,
                        step:function(){
                            span.text(Math.floor(this.count));
                        },
                        complete:function(){
                            span.text(target);
                        }
                    }
                )
            })
        }else if(scrollTop <= croup){
           $("span").text(0);
        };
        let leading = $("#leading").offset().top;
          function comma(num){
                    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
        if(scrollTop >= leading){
            $(".num>p").each(function(){
               let p =$(this);
               let target = Number(p.data("target")) ||0;
               let decimal =Number(p.data("decimal")) ||0;
               let suffix = p.data("suffix") || "";
               $({count:0}).animate(
                {count:target},
                {
                    duration:1500,
                    easing:"swing",
                    step:function(){
                        let value = this.count.toFixed(decimal);
                        let parts = value.split(".");
                        parts[0] = comma(parts[0]);
                        p.text(parts.join(".")+suffix);
                    }
                }
               )
            })
        }
     
    })

})