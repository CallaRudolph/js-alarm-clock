var Alarm = require('./../js/alarm.js').alarmModule;

$(document).ready(function() {
  function update() {
    $('#clock').html(moment().format('H:mm A'));
  }
  setInterval(update, 1000);
  $('#alarm').hide();
  var time = moment().format("H:mm");
  $('#alarm-form').submit(function(event) {
    event.preventDefault();
    var alarmSet = $('#set').val();
    var alarm = new Alarm(alarmSet);
    var winning = alarm.clock(time);
    console.log(winning);
    if (winning === 1) {
      $('#alarm').show();
    } 
  });
});
