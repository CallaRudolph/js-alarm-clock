function Alarm(alarmSet) {
  this.alarmSet = alarmSet;
  // this.time = time;
}

Alarm.prototype.clock = function(time) {
  var test = 0;
  if (this.alarmSet > time) {
    test = 1;
  }
  return test;
};

// Alarm.prototype.timer = function() {
//   this.time = function update() {
//     $('#clock').html(moment().format('H:mm A'));
//   }
//   setInterval(this.time, 1000);
//   return this.time;
// }

exports.alarmModule = Alarm;
