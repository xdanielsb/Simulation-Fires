'use strict'

$(document).ready(function () {
  //$('.ui.sidebar').sidebar('toggle');
  $('#chkCigar').change(function () {
    if($('#chkCigar').is(':checked')){
      $('#img-cigar').show();
    }else{
      $('#img-cigar').hide();
    }
  });
  $('#chkOutlet').change(function () {
    if($('#chkOutlet').is(':checked')){
      $('#img-toma').show();
    }else{
      $('#img-toma').hide();
    }
  });
  $('#chkVela').change(function () {
    if($('#chkVela').is(':checked')){
      $('#img-vela').show();
    }else{
      $('#img-vela').hide();
    }
  });
});
