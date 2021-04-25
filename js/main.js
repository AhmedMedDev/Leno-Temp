/* $ */
$(document).ready(function () {
    
    'use strict';
    
    //FOR NAVBAR RESPONSIVE
    if($(window).width() <= 990 ){
        
    $('.nav .icon-nav, .nav ul li a ').click(function () {
            $('.nav-links').animate({
                "height" : "toggle"
    
            });
        });
    }
    ///////////////////////////////////
    //FOR NAVBAR ICON ANIMATION
    var counter = 1;
    $('.nav .icon-nav , .nav ul li a').click(function(){
        counter++;
        if( counter %2 == 0 ){
            $('.nav .icon-nav .inSecond').css({
                "transform" : "rotateY(90deg)"
            });
            $('.nav .icon-nav .inFerst').css({
                "marginBottom" : "-9px",
                "transform" : "rotate(-45deg)"
            });
            $('.nav .icon-nav .inThird').css({
                "marginTop" : "-9px",
                "transform" : "rotate(45deg)"   
            });
            
        }else{
            $('.nav .icon-nav .inSecond').css({
                "transform" : "rotateY(0deg)"
            });
            $('.nav .icon-nav .inFerst').css({
                "margin" : "6px 0",
                "transform" : "rotate(0deg)"
            });
            $('.nav .icon-nav .inThird').css({
                "margin" : "6px 0",
                "transform" : "rotate(0deg)"   
            });
        }
    })
    /////////////////////////////////////////////
    //FOR ANIMATION NAVNAR
    
    $(window).on("scroll",function(){
        if( $(window).scrollTop() == 0  && $(window).width() < 990) {
            
            $('.nav').css({
                "height":"70px",
            })
            $('.nav .nav-links').css({
                "top":"70px",
            })
        }else{
            $('.nav').css({
                "height":"60px",
            });
            $('.nav .nav-links').css({
                "top":"60px",
            })
        }
    });
    $(window).on("scroll",function(){
        if( $(window).scrollTop() == 0  && $(window).width() > 990) {
            $('.nav').css({
                "paddingTop":"40px",
                "paddingBottom":"250px",
                "background": "transparent" ,
                "height":"70px",
            })
        }else{
            $('.nav').css({
                "paddingTop":"10px",
                "paddingBottom":"0px",
                "background": "#4633af" ,
                "height":"60px !important",
            })
        }
    });
    /////////////////////////////////////////
    
    //FOR RESPONSIVE HEADER
    if( $(window).width() < 990 ){
        
        $('.header .content .box-text .bb').show()
        
    }
    /////////////////////////////////
    //FOR ANIMATION TEXT HEADER
    function animatedText() {
        $('.word1').fadeOut(1000,function(){
            $('.word2').fadeIn(1000,function() {
                $('.word2').fadeOut(1000,function(){
                    $('.word3').fadeIn(1000,function(){
                        $('.word3').fadeOut(1000,function(){
                            $('.word1').fadeIn(1000,animatedText);
                        })
                    })
                })
            })
        })
    }
    animatedText();
    
    ///////////////////////////////////////////////////
    //FOR SHOW FEATURE SEECTION
    $('.feature .content .featConText ul li:nth-child(2)').click(function(){
        $('.featCon3, .featCon').hide(1000);
        $('.feature .content .featConText ul li:nth-child(3), .feature .content .featConText ul li:nth-child(1)').css({
            "color" :"#fff "
        });
        $('.hr3, .hr1').css({
            "background" :"#fff "
        })
        
        $('.featCon2').show(1000);
        $(this).css({
            "color" :"#00C9DB "
        });
        $('.hr2').css({
            "background" :"#00C9DB "
        })
        
    });
    $('.feature .content .featConText ul li:nth-child(3)').click(function(){
        $('.featCon2, .featCon').hide(1000);
        $('.feature .content .featConText ul li:nth-child(2), .feature .content .featConText ul li:nth-child(1)').css({
            "color" :"#fff "
        });
        $('.hr2, .hr1').css({
            "background" :"#fff "
        })
        
        $('.featCon3').show(1000);
        $(this).css({
            "color" :"#00C9DB "
        });
        $('.hr3').css({
            "background" :"#00C9DB "
        })
    })
    $('.feature .content .featConText ul li:nth-child(1)').click(function(){
        $('.featCon3, .featCon2').hide(1000);
        $('.feature .content .featConText ul li:nth-child(2), .feature .content .featConText ul li:nth-child(3)').css({
            "color" :"#fff "
        });
        $('.hr2, .hr3').css({
            "background" :"#fff "
        })
        $('.featCon').show(1000);
        $(this).css({
            "color" :"#00C9DB "
        });
        $('.hr1').css({
            "background" :"#00C9DB "
        })
        
    });
    
    
    //FOR HOVERING FEATURE SECTION
    $('.feature .content .featConText ul li:nth-child(1)').hover(function(){
        $(this).addClass('activeFeat');
        $('.hr1').addClass('activeFeatLine')
    },function(){
        $(this).removeClass('activeFeat');
        $('.hr1').removeClass('activeFeatLine')
    })
    
    $('.feature .content .featConText ul li:nth-child(2)').hover(function(){
        $(this).addClass('activeFeat');
        $('.hr2').addClass('activeFeatLine')
    },function(){
        $(this).removeClass('activeFeat');
        $('.hr2').removeClass('activeFeatLine')
    })
    
    $('.feature .content .featConText ul li:nth-child(3)').hover(function(){
        $(this).addClass('activeFeat');
        $('.hr3').addClass('activeFeatLine')
    },function(){
         $(this).removeClass('activeFeat');
        $('.hr3').removeClass('activeFeatLine')
    })
    
    
    /*************************************************SCROLL TO ELEMNT**************/
        $('.nav ul li a ').click(function(e){
            e.preventDefault();
            $('html ,body').animate({
                    scrollTop:$('#'+$(this).data('scroll')).offset().top 
                },2000);
            
        });
   /*************************************************SCROLL TO ELEMNT**************/
    /*************************************************ACTIVEING COLOUR NAVBAR**************/
        $(window).on("scroll",function(){
        
        /*$('.block').each(function(){
            if($(window).scrollTop() > $(this).offset().top){
                var blockId = $(this).attr('id');
                
                $('.nav li a [data-scroll=" ' + blockId + ' "]').addClass('active');
            }
        })*/
        
        if ($(window).scrollTop() > $('.header').offset().top  - $(window).height()  ) 
        {
            $('.nav li a ').removeClass('active')
            $('.nav li:nth-child(1) a ').addClass('active')
        }
        if ($(window).scrollTop() > $('.feature').offset().top  - $(window).height() +600 ) 
        {
            $('.nav li a ').removeClass('active')
            $('.nav li:nth-child(2) a ').addClass('active')
        }
        if ($(window).scrollTop() > $('.preview').offset().top  - $(window).height() +600 ) 
        {
            $('.nav li a ').removeClass('active')
            $('.nav li:nth-child(3) a ').addClass('active')
        }
        if ($(window).scrollTop() > $('.goals').offset().top  - $(window).height() +600 ) 
        {
            $('.nav li a ').removeClass('active')
            $('.nav li:nth-child(4) a ').addClass('active')
        }
        if ($(window).scrollTop() > $('.contact').offset().top  - $(window).height() +600 ) 
        {
            $('.nav li a ').removeClass('active')
            $('.nav li:nth-child(5) a ').addClass('active')
        }
        
        
        
        
    })
   /*************************************************ACTIVEING COLOUR NAVBAR**************/
    
    //FOR ANIMATION FEATURE
    
    $(window).on("scroll",function(){
        
        if($(window).scrollTop() >= $('.feature .content .featCon .box').offset().top - $(window).height() + 500){
            
            $('.feature .content .featCon .box').addClass('flipInY ');
        }
        
    });
    //FOR ANIMATION FEATURE
    
    $(window).on("scroll",function(){
        
        if($(window).scrollTop() >= $('.feature .content .featCon .box-img').offset().top - $(window).height() + 100){
            
            $('.feature .content .featCon .box-img').addClass('bounceIn ');
        }
        
    });
    
     //FOR ANIMATION FEATURE
    
    $(window).on("scroll",function(){
        
        if($(window).scrollTop() >= $('.feature .content .featCon h2').offset().top - $(window).height() + 100){
            
            $('.feature .content .featCon h2').addClass('fadeInRightBig ');
            $('.feature .content .featCon .box-feat > p').addClass('fadeInLeftBig ');
        }
        
    });
    
    //FOR ANIMATION Marketing
    
    $(window).on("scroll",function(){
        
        if($(window).scrollTop() >= $('.mark .content .row .box').offset().top - $(window).height() + 100){
            
            $('.mark .content .row .box').addClass('fadeInRightBig ');
        }
        
    });
    
    //FOR ANIMATION Goals
    
    $(window).on("scroll",function(){
        
        if($(window).scrollTop() >= $('.goals img').offset().top - $(window).height() + 100){
            
            $('.goals img').addClass('bounceIn ');
        }
        
    });
    
    //FOR ANIMATION Download Leno
    
    $(window).on("scroll",function(){
        
        if($(window).scrollTop() >= $('.download .content ').offset().top - $(window).height() + 100){
            
            $('.download .content .box-text').addClass('bounceInLeft');
            $('.download .content .box-img').addClass('bounceInRight');
        }
        
    });
    
    //FOR ANIMATION Download Leno
    
    $(window).on("scroll",function(){
        
        if($(window).scrollTop() >= $('.contact .box2 .input ').offset().top - $(window).height() + 100){
            
            $('.contact .box2 .input').addClass('bounceIn');
        }
        
    });
    
    //FOR ANIMATION FOOTER
    
    $(window).on("scroll",function(){
        
        if($(window).scrollTop() >= $('.footer .content .aboutBox ').offset().top - $(window).height() + 100){
            
            $('.footer .content .row .col-lg-4').addClass('fadeInUpBig');
        }
        
    });
    
    /*************************************************SCROLL_TO_TOP**************/
    $(window).on("scroll",function(){
        if($(window).scrollTop() > 900){
            $('.scrollToTop').fadeIn(1000)
        }else{
            $('.scrollToTop').fadeOut(1000)
        }
    })
    $('.scrollToTop').click(function(){
        $('html,body').animate({
            scrollTop : '0'
        },2000)
    })
   /*************************************************SCROLL_TO_TOP**************/
    
    /*************************************************LOADING**************/
    $(window).on("load",function(){
        
        $('.loading .overlay .spinner').fadeOut(1000,function(){
            $(this).parent().fadeOut(1500)
        })
    })
   /*************************************************LOADING**************/
    
    
    
    
});