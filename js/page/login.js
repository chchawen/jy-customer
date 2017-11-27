$(function () {
    $("#login").click(function(){
        // $("#phone").trigger("click").focus();
        $("#model").show();
        $("#code1").trigger("click").focus();
    });
    $('.login-div-code-item').bind('input propertychange', function() {  
        if($(this).val().length>1){
            $(this).val($(this).val().substring(0,1));
        }
        if(!/^[-]?[0-9]*\.?[0-9]+(eE?[0-9]+)?$/.test($(this).val())){
            $(this).val("");
        }
        if($(this).val().length>0&&$(this).attr("id")!="code4"){
            $(this).next().trigger("click").focus();
        }
    });

    $("#esc").click(function(){
        $('.login-div-code-item').each(function(index,e){
            $(e).val("");
        })
        $("#model").hide();
    });
})