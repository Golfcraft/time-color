import Rainbow from 'rainbowvis.js';

const rainbow = new Rainbow();

export function getTimeColorHex(time:Date|number|string){
    var date = time instanceof Date ? time : new Date(time);
    var clockTime = getAbsoluteUTCClockTime(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
    const MAX = getAbsoluteUTCClockTime(23,59,59,999);

    return rainbow.colorAt(100*clockTime/MAX);

    function getAbsoluteUTCClockTime(h:number,m:number,s:number,ms:number){
        return ms + (s*1000) + (m*1000*60) + (h*1000*60*60);
    }
}