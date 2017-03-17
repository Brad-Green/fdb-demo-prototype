new WOW().init();

$(function () {
  $(window).on("load resize", function () {
    $(".fill-screen").css("height", window.innerHeight);
  });
});

$('.heart').click(function(){
    $(this).toggleClass('fa-heart-o fa-heart');
    $(this).toggleClass('heart heart-filled');
});

$('.heart-filled').click(function(){
  $(this).toggleClass('fa-heart fa-heart-o');
  $(this).toggleClass('heart-filled heart');
});

$('.card').mouseover(function(){
    $(this).find('.ellipsis').css('visibility', 'visible');
});
$('.card').mouseout(function(){
    $(this).find('.ellipsis').css('visibility', 'hidden');
});

$('.card').mouseover(function(){
    $(this).find('.heart').css('visibility', 'visible');
});
$('.card').mouseout(function(){
    $(this).find('.heart').css('visibility', 'hidden');
});

$('.hide-card').click(function(){
    var card = $(this).parents('.card');
    card.removeClass('wow fadeInUp');
    card.removeAttr('style');
    card.addClass('animated flipOutX');
    setTimeout(function () {
      card.hide();
    }, 500);
});

$('.card').on('click', function(){
  if (event.target.id != 'noclix') {
    window.location.href = "patient.html";
  }
});

$('.showcode').click(function(){
  var codepanel = $(this).siblings('.shown-code');
  $(codepanel).slideToggle(250);
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();

    $('.collapse.in').prev('.panel-heading').addClass('active');
    $('#accordion, #bs-collapse')
    .on('show.bs.collapse', function(a) {
      $(a.target).prev('.panel-heading').addClass('active');
    })
    .on('hide.bs.collapse', function(a) {
      $(a.target).prev('.panel-heading').removeClass('active');
    });
});
