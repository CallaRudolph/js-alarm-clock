var Alarm = require('./../js/alarm.js').alarmModule;

$(document).ready(function() {
  function update() {
    $('#clock').html(moment().format('h:mm A'));
  }
  setInterval(update, 1000);

  $('#alarm').hide();

  $('#alarm-form').submit(function(event) {
    event.preventDefault();
    var alarmSet = $('#set').val();
    var alarm = new Alarm(alarmSet);

    setInterval(function(){
      if (alarm.wake() === true) {
        $('#alarm').show();
      }
    }, 1000);
  });
});
