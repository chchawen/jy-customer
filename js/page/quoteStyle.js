var chooseQuoteStyle = function(style){
	if(style=="metro-click"){
		$(".quoteStyle-div-form-choose").eq(1).show();
        $(".quoteStyle-div-form-choose").eq(0).hide();
        $(".address").hide();
        $(".metro").show();
	}else if(style=="address-click"){
		$(".quoteStyle-div-form-choose").eq(0).show();
        $(".quoteStyle-div-form-choose").eq(1).hide();
        $(".address").show();
        $(".metro").hide();
	}
}