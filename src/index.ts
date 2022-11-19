export function getTimeColorHex(time:Date|number|string){
    var date = time instanceof Date ? time : new Date(time);
    var clockTime = getAbsoluteUTCClockTime(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
    const MAX = getAbsoluteUTCClockTime(23,59,59,999);

    return hslToHex(360*clockTime/MAX,100,50);

    function getAbsoluteUTCClockTime(h:number,m:number,s:number,ms:number){
        return ms + (s*1000) + (m*1000*60) + (h*1000*60*60);
    }
}

function hslToHex(h, s, l) {
    h /= 360;
    s /= 100;
    l /= 100;
    let r, g, b;
    if (s === 0) {
        r = g = b = l; // achromatic
    } else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    const toHex = x => {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    return `${toHex(r)}${toHex(g)}${toHex(b)}`;
}