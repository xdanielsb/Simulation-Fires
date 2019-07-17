'use strict'

const oneSecond = 1000;

$(document).ready(function () {
  //$('.ui.sidebar').sidebar('toggle');
  $('#fire').hide();
  $('.fog__container').hide();
  $('#chkCigar').change(function () {
    if($('#chkCigar').is(':checked')){
      $('.container-cigar').show();
    }else{
      $('.container-cigar').hide();
    }
  });
  $('#chkOutlet').change(function () {
    if($('#chkOutlet').is(':checked')){
      $('.container-outlet').show();
    }else{
      $('.container-outlet').hide();
    }
  });
  $('#chkVela').change(function () {
    if($('#chkVela').is(':checked')){
      $('.container-vela').show();
    }else{
      $('.container-vela').hide();
    }
  });
  $('.thermostat').click(function(){
    $('.ui.modal').modal('show');
  })
  $('#iniciarSimulacion').click(function(){
    $(".smokeElement").addClass("smoke");
    $("#isOk").addClass("animate");
    setTimeout( function(){
      $(".content-body").addClass("fog");
      $('.fog__container').show();
      $("#isOk").removeClass("animate");
      $("#isSmoke").addClass("animate");
    }  , oneSecond * 10 );
    setTimeout( function(){
      $("#isSmoke").removeClass("animate");
      $("#isFire").addClass("animate");
      $('#fire').show();
      startFire();
    }  , oneSecond * 20 );
  })

});
