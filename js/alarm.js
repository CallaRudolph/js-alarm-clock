function Alarm(alarmSet) {
  this.alarmSet = alarmSet;
}

Alarm.prototype.clock = function(time) {
  var test = 0;
  if (this.alarmSet > time) {
    test = 1;
  } 
  return test;
};



exports.alarmModule = Alarm;
