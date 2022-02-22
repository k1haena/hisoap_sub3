$(function(){
  $('#all').click(function () {
    $('.filter1, .filter2').show();//서서히 나타나게 만들고 싶다면 .fadeIn()을 사용한다.
  });
  $('#filter1').click(function () {
    $('.filter1').show();
    $('.filter2').hide();
  });
  $('#filter2').click(function () {
    $('.filter2').show();
    $('.filter1').hide();
  });
  $('#filter3').click(function () {
    $('.filter3').show();
    $('.filter1').hide();
  });
  $('.filter li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
});
