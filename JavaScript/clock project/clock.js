var wakeuptime = 7;
var noo = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partyTime;
var evening = 18;

var showCurrentTime = function () {
    var clock = document.getElementById('clock');
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }

    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
    clock.innerHTML = clockTime;
};