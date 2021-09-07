$(function(){
  $('#menu-btn').click(function(){
    $('.main-nav').toggleClass('is-active');
  });
});

window.onload = function() {
  const loader = document.getElementById('loading');
  loader.classList.add('completed');
}