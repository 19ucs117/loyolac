
    $(document).ready(function(){
        $(".mobile").click(function(){
            $(".mobview").slideToggle();
            $(".mobview").show();
        });
        $(".aboutnav").click(function(){
            $(".homenav").slideToggle();
            $(".mobview").hide();
        });     
        $(".mobile").click(function(){
            $(".mobview").show();
        });  
        $(".close").click(function(){
            $(".homenav").hide();
        });
        $(".adminav").click(function(){
            $(".admission").slideToggle();
            $(".mobview").hide();
        });
        $(".close1").click(function(){
            $(".admission").hide();
        });
        $(".close2").click(function(){
            $(".mobview").hide();
        });
        $(".scenav").click(function(){
            $(".sce").slideToggle();
            $(".mobview").hide();
        });
        $(".close3").click(function(){
            $(".sce").hide();
        });
        $(".recnav").click(function(){
            $(".rec").slideToggle();
            $(".mobview").hide();
        });
        $(".close4").click(function(){
            $(".rec").hide();
        });
        $(".iqacnav").click(function(){
            $(".iqac").slideToggle();
            $(".mobview").hide();
        });
        $(".close5").click(function(){
            $(".iqac").hide();
        });
        $(".sernav").click(function(){
            $(".ser").slideToggle();
            $(".mobview").hide();
        });
        $(".close6").click(function(){
            $(".ser").hide();
        });

    });