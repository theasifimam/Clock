console.log('This is clock.js');

function updateClock() {
    // Getting Current date here
    let currentTime = new Date();

    // Extracting Hours, Minutes and Seconds here 
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    // Padding 0 if the number < 10
    currentMinutes = (currentMinutes < 10) ? "0" + currentMinutes : "" + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    // currentHour = (currentHour < 10) ? "0" + currentHour : "" + currentHour;

    // Converting railway clock to AM/PM clock
    let timeOfDay = (currentHour < 12) ? "AM" : "PM";
    currentHour = (currentHour == 0) ? 12 : currentHour; 
    currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;

    // Combined the string of Hour, Minutes, Seconds 
    let currentTimeStr = currentHour + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

    // Inserting the String in the DOM
    document.getElementById("clock").innerHTML = currentTimeStr;

}