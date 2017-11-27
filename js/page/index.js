// window.addEventListener('pageshow', function (e) { 
// }); 
var swiper = null;
var closeModel = function(){
    $("#model").hide();
}
$(function () {
    if(swiper == null){
        swiper = new Swiper('.swiper-container', {
            autoplay: 3000,
            autoplayDisableOnInteraction : false,
            pagination : '.swiper-pagination',
            paginationClickable :true,
            paginationElement : 'li',
        });
    }
})
