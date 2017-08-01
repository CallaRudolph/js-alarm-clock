var Alarm = require('./../js/alarm.js').alarmModule;

$(document).ready(function() {
  $('#time').text(moment());
  $('#alarm').hide();
  $('#alarm-form').submit(function(event) {
    event.preventDefault();
    var time = $('#set').val();
    $('#alarm').show();
  });
});
