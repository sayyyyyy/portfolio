//mobileサイズ用のメニュー
$(function(){
  $('#menu-btn').click(function(){
    $('.main-nav').toggleClass('is-active');
  });
});

//ローディング画面
window.onload = function() {
  const loader = document.getElementById('loading');
  loader.classList.add('completed');
}

//スクロールしたらアニメーション
$(function() {
  $(window).scroll(function() {
    $(".animate--add").each(function() {
      var scroll = $(window).scrollTop();
      var blockPosition = $(this).offset().top;
      var windowHeihgt = $(window).height();
      if (scroll > blockPosition - windowHeihgt + 300) {
        $(this).addClass("blockIn");
      }
    });
  });
  $(window).scroll(function() {
    $(".page-header").each(function() {
      var scroll = $(window).scrollTop();
      if (scroll > 100) {
        $(this).addClass("blockIn");
      } 
      else {
        $(this).removeClass("blockIn");
      }
    });
  });
});