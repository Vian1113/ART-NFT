$(function() {
  
  $(".menuOpen").click(function(e){
    e.preventDefault();
    $(".menuOpen").toggleClass("d-none");
    $(".menuClose").toggleClass("d-block");


  });
  
  $(".menuClose").click(function(e){
    e.preventDefault();
    $(".menuOpen").toggleClass("d-none");
    $(".menuClose").toggleClass("d-block");


  });


});

//artist 輪播


var swiper = new Swiper(".artistSwiper", {
    slidesPerView: 1,
    spaceBetween: 0,

    breakpoints: {
      1200: {
        centeredSlides:true,
        slidesPerView: 3,
        spaceBetween: 24,
      }
    },

    loop: true,
    grabCursor: true,
    pagination: {
    el: ".swiper-pagination",
          clickable: true,
    },
});

//瀑布流

// 確保圖片都載入後，以免造成剛進入頁面時圖片會被覆蓋
$('.row').imagesLoaded().progress( function() {
  $('.row').masonry(); // 渲染整體畫面
});
 