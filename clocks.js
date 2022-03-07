var DateTime = luxon.DateTime;

function generateDT(tzString) {
    return DateTime.now().setZone(tzString);
}

const est = generateDT("America/New_York");
document.getElementById("date").innerHTML = est.toLocaleString({ weekday: 'short', month: 'long', day: 'numeric' });
document.getElementById("time").innerHTML = est.toLocaleString(DateTime.TIME_SIMPLE);
document.getElementById("offset").innerHTML = est.offsetNameShort;
// console.log(now.offsetNameLong);