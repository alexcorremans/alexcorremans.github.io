var DateTime = luxon.DateTime;

function generateDT(tzString) {
    return DateTime.now().setZone(tzString);
}

function displayClocks() {
    const pst = generateDT("America/Los_Angeles");
    document.getElementById("date-0").innerHTML = pst.toLocaleString({ weekday: 'short', month: 'long', day: 'numeric' });
    document.getElementById("time-0").innerHTML = pst.toLocaleString(DateTime.TIME_SIMPLE);
    document.getElementById("offset-0").innerHTML = pst.offsetNameShort;

    const est = generateDT("America/New_York");
    document.getElementById("date-1").innerHTML = est.toLocaleString({ weekday: 'short', month: 'long', day: 'numeric' });
    document.getElementById("time-1").innerHTML = est.toLocaleString(DateTime.TIME_SIMPLE);
    document.getElementById("offset-1").innerHTML = est.offsetNameShort;

    const uk = generateDT("Europe/London");
    document.getElementById("date-2").innerHTML = uk.toLocaleString({ weekday: 'short', month: 'long', day: 'numeric' });
    document.getElementById("time-2").innerHTML = uk.toLocaleString(DateTime.TIME_SIMPLE);
    document.getElementById("offset-2").innerHTML = uk.offsetNameShort;

    const eur = generateDT("Europe/Berlin");
    document.getElementById("date-3").innerHTML = eur.toLocaleString({ weekday: 'short', month: 'long', day: 'numeric' });
    document.getElementById("time-3").innerHTML = eur.toLocaleString(DateTime.TIME_SIMPLE);
    document.getElementById("offset-3").innerHTML = eur.offsetNameShort;

    const dub = generateDT("Asia/Dubai");
    document.getElementById("date-4").innerHTML = dub.toLocaleString({ weekday: 'short', month: 'long', day: 'numeric' });
    document.getElementById("time-4").innerHTML = dub.toLocaleString(DateTime.TIME_SIMPLE);
    document.getElementById("offset-4").innerHTML = dub.offsetNameShort;

    const syd = generateDT("Australia/Sydney");
    document.getElementById("date-5").innerHTML = syd.toLocaleString({ weekday: 'short', month: 'long', day: 'numeric' });
    document.getElementById("time-5").innerHTML = syd.toLocaleString(DateTime.TIME_SIMPLE);
    document.getElementById("offset-5").innerHTML = syd.offsetNameShort;
}

window.onload = displayClocks();
setInterval(displayClocks, 1000);

// console.log(now.offsetNameLong);