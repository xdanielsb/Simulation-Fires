'use strict'

const oneSecond = 1000;

$(document).ready(function () {
  //$('.ui.sidebar').sidebar('toggle');
  $('#fire').hide();
  $('.fog__container').hide();
  $('#detenerSimulacion').hide();
  $('#iniciarGraficasSimulacion').hide();

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
    $('#modalSensor').modal('show');
  })
  $('#iniciarGraficasSimulacion').click(function(){
    $('#modalCharts').modal('show');
  })
  $('#iniciarSimulacion').click(function(){
    $(".smokeElement").addClass("smoke");
    $("#isOk").addClass("animate");
    let canStartFire = $('#chkVela').is(':checked') || $('#chkOutlet').is(':checked') || $('#chkCigar').is(':checked');
    if( !canStartFire ) return;
    $('#iniciarSimulacion').hide();
    $('#detenerSimulacion').show();
    $('#iniciarGraficasSimulacion').show();
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
  $('#detenerSimulacion').click(function(){
    $('#detenerSimulacion').hide();
    $('#iniciarSimulacion').show();
    $("#isOk").removeClass("animate");
    $("#isSmoke").removeClass("animate");
    $("#isFire").removeClass("animate");
    $(".smokeElement").removeClass("smoke");
    $(".content-body").removeClass("fog");
    $('.fog__container').hide();
    $('#fire').hide();
    $('#iniciarGraficasSimulacion').hide();
  })
});
