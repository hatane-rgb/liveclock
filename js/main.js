function liveclock() {
    var nowTime = new Date();
    let nowHour = nowTime.getHours();
    let nowMin  = nowTime.getMinutes();
    let msg = nowHour + ":" + nowMin;
    document.getElementById("time").innerHTML = msg;
}
setInterval('liveclock()',500);
