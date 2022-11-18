var Rainbow = require('rainbowvis.js');
var myRainbow = new Rainbow();

module.exports = function getHelpImStreamingTimeColor(time){
    var date = time instanceof Date ? time : new Date(time);
    var clockTime = getAbsoluteUTCClockTime(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
    const MAX = getAbsoluteUTCClockTime(23,59,59,999);

    return myRainbow.colorAt(100*clockTime/MAX);

    function getAbsoluteUTCClockTime(h,m,s,ms){
        return ms + (s*1000) + (m*1000*60) + (h*1000*60*60);
    }
}