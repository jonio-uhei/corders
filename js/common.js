$(function(){

  // ここからハンバーガーメニュー
  $('.burger-btn').on('click',function(){
    $('.burger-btn').toggleClass('close');
    $('.nav-wrapper').fadeToggle(500);
    $('.nav__fade').addClass('nav__fade');
    $('.nav__fade1').addClass('nav__fade1');
    $('.nav__fade2').addClass('nav__fade2');
    $('.nav__fade3').addClass('nav__fade3');
  });
  // ここまでハンバーガーメニュー


  //ここからアコーディオン
    $('.question-response__list').click(function() {
      var $answer = $(this).find('.question-response__answer');
      if($answer.hasClass('open')) { 
        $answer.removeClass('open');
        $answer.slideUp();
        $(this).find('span').text('+');
      } else {
        $answer.addClass('open'); 
        $answer.slideDown();
        $('span').text('-');
        $(this).find('span').text('-');
      }
    });
  //ここまでアコーディオン

});
