var choosePayStyle = function(style){
	if(style=="alipay-click"){
		$(".quoteStyle-div-form-choose").eq(0).show();
        $(".quoteStyle-div-form-choose").eq(1).hide();
        $(".alipay").show();
        $(".bank").hide();
	}else if(style=="bank-click"){
		$(".quoteStyle-div-form-choose").eq(1).show();
        $(".quoteStyle-div-form-choose").eq(0).hide();
        $(".alipay").hide();
        $(".bank").show();
	}
}