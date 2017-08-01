var Alarm = require('./../js/alarm.js').alarmModule;

$(document).ready(function() {
  function update() {
    $('#clock').html(moment().format('h:mm A'));
  }
  setInterval(update, 1000);
  $('#alarm').hide();
  var time = moment().format("h:mm");

  $('#alarm-form').submit(function(event) {
    event.preventDefault();
    var alarmSet = $('#set').val();
    var alarm = new Alarm(alarmSet);
    // var winning = alarm.clock(test);

    setInterval(function(){
      // alarm.clock();
      if (alarm.clock() === true) {
        $('#alarm').show();
      }
    }, 1000);
  });
});
