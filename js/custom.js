$(function () {

	// Change Header Height

	$('header').height($(window).height());
  $(window).resize(function() {
    $('header').height($(window).height());
  })

	// Adjust intro item Center

	$('.intro').css('paddingTop', ($(window).height() - $('.intro').height()) / 3 );
  $(window).resize(function(){
    $('.intro').css('paddingTop', ($(window).height() - $('.intro').height()) / 3 );
  })



    // Loading Screen

    $(window).ready(function(){

      $(".loading-overlay .spinner").fadeOut(1000,function(){
        $(this).parent().fadeOut(1000,function(){
          $(this).remove();
          $("body").css("overflow","auto");
        });
      });

    })






});