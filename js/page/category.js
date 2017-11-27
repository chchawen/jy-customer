window.addEventListener('pageshow', function (e) { 
    reload("categoryCache");
});
var chooseCategory = function(type){
    sessionJs.setLocalStorage("category",type);
    if(type=="pad"){
        $(".category-div-phone").addClass("color-gray");
        $(".category-div-pad").removeClass("color-gray");
    }else if(type=="phone"){
        $(".category-div-phone").removeClass("color-gray");
        $(".category-div-pad").addClass("color-gray");
    }
}
$(function () {
    if(sessionJs.getLocalStorage("category")=="phone"){
        $(".category-div-pad").addClass("color-gray");
    }else{
        $(".category-div-phone").addClass("color-gray");
    }
})
