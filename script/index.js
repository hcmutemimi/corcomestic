
document.addEventListener("DOMContentLoaded",function(){
    var menunho = document.querySelector('.navbar');
    window.addEventListener('scroll',function(){
        if(window.pageYOffset >45){
            menunho.classList.add('navbar-larger')
        }
        else{
            menunho.classList.remove('navbar-larger')
        }})
        var cart2 = document.querySelector('.cart-wrap');
        window.addEventListener('scroll',function(){
            if(window.pageYOffset >45){
                cart2.classList.add('cart-2')
            }
            else{
                cart2.classList.remove('cart-2')
            }})
            var cart2 = document.querySelector('.cart-wrap');
        window.addEventListener('scroll',function(){
            if(window.pageYOffset >45){
                cart2.classList.add('cart-2')
            }
            else{
                cart2.classList.remove('cart-2')
            }})
            var cart2 = document.querySelector('.cart-wrap');
            window.addEventListener('scroll',function(){
                if(window.pageYOffset >45){
                    cart2.classList.add('cart-2')
                }
                else{
                    cart2.classList.remove('cart-2')
                }})

    var blocksearch = document.querySelector('.header-search-block');
    window.addEventListener('scroll',function(){
        if(window.pageYOffset >45){
            blocksearch.classList.add('header-search-block-small')
        }else{
            blocksearch.classList.remove('header-search-block-small')

        }
    })
},false)

$(function(){
setInterval(function(){
    $(".slideshow2--2 ul").animate({marginLeft: -195}, 3000,function(){
        $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
    })
}, 7000);
});
$(function(){
setInterval(function(){
    $(".slideshow3--3 ul").animate({marginLeft: -195},2000,function(){
        $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
    })
}, 10000);
});
$(function(){
setInterval(function(){
    $(".slideshow4--4 ul").animate({marginLeft: -195}, 3500,function(){
        $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
    })
}, 14000);
});
$(function(){
setInterval(function(){
    $(".product24 ul").animate({marginLeft: -292.5},2200,function(){
        $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
    })
}, 10000);
});
$(function(){
setInterval(function(){
    $(".slideshow1--1 ul").animate({marginLeft: -900}, 4000,function(){
        $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
    })
}, 11000);
});
$(function(){
setInterval(function(){
    $(".brand1 ul").animate({marginLeft: -146.25}, 1000,function(){
        $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
    })
}, 4000);
});



