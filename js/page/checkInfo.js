var titleClick = function(obj){
	if($(obj).next().css("display") == "block"){
        $(obj).next().hide();
        $(obj).find(".checkInfo-img-icon").eq(0).attr("src","img/arrows1.png");
    }else{
        $(obj).next().show();
        $(obj).find(".checkInfo-img-icon").eq(0).attr("src","img/arrows2.png");
    }
}