function Alarm(alarmSet) {
  this.alarmSet = alarmSet;
}


Alarm.prototype.clock = function() {
  var time = moment().hour() + ":" + moment().minute();
  if (this.alarmSet === time) {
    return true;
  } else {
    return false;
  }
};


exports.alarmModule = Alarm;
