/**
 * Created by Steven on 2017/3/15.
 */
$(function(){
    Carousel.init($(".J_Poster"));
    $('[data-toggle="tooltip"]').tooltip();
//  设置tab选项卡的横向滚动条

    var ul_wrap=$('.ul-wrap').eq(0);
    var ul_content= $('.nav-tabs-frist').eq(0)  ;
    var lis=$('.nav-tabs-frist').eq(0).children();
    var width=50;

    lis.each(function(index,element){

        width+=element.clientWidth;
    })

    if($(window).width()<width){
        ul_wrap.css({
            'overflow-x':'scroll',

        });
        ul_content.css({
            'width':width,

        });
    }



    var timer=null;
    var top=document.getElementById('scroll-top');
    top.onclick=function(){
        timer=setInterval(function(){

            var osTop=document.documentElement.scrollTop|| document.body.scrollTop;
            var speed=Math.floor(-osTop/5);
            console.log(document.body.scrollTop+'  '+speed);
            document.documentElement.scrollTop=document.body.scrollTop=osTop+speed;
            if(osTop==0){
                clearInterval(timer);
            }
        },50);


    }





});































