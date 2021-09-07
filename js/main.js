$(function(){
  $('#menu-btn').click(function(){
    $('.main-nav').toggleClass('is-active');
  });
});

window.onload = function() {
  const loader = document.getElementById('loading');
  loader.classList.add('completed');
}

$(function() {
  $(window).scroll(function() {
    $(".chapter").each(function() {
      var scroll = $(window).scrollTop();
      var blockPosition = $(this).offset().top;
      var windowHeihgt = $(window).height();
      if (scroll > blockPosition - windowHeihgt + 300) {
        $(this).addClass("blockIn");
      }
    });
  });
});