$(function () {
    $(".help-div-question").click(function(){
    	if($(this).find("img").attr("src")=="img/arrows1.png"){
    		$(this).find("img").attr("src","img/arrows2.png");
    		$(this).next().fadeIn(500);
    	}else{
    		$(this).find("img").attr("src","img/arrows1.png");
    		$(this).next().fadeOut(500);
    	}
    })
})