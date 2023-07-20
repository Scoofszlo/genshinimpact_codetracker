showTimeAndDate();
timeAndDateInterval();
setInterval(timeAndDateInterval, 1000);

function timeAndDateInterval() {
    var currentDate = new Date();
    var targetDate = new Date(document.getElementById('target_date').dateTime);

    var timeDiff = Math.abs(targetDate - currentDate);

    var seconds = Math.floor((timeDiff / 1000) % 60);
    var minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    var hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    hours = hours + (days * 24);

    var timeInterval = '';

    if (days > 0) {
        timeInterval += days + 'd ';
    }

    var remainingHours = Math.floor(timeDiff / (1000 * 60 * 60)) - (days * 24);
    if (remainingHours > 0) {
        timeInterval += remainingHours + 'h ';
    }

    if (minutes > 0) {
        timeInterval += minutes + 'm ';
    }

    if (seconds > 0) {
        timeInterval += seconds + 's ';
    }

    document.getElementById('time_interval').textContent = timeInterval.trim() + " ago";
}

function showTimeAndDate() {
    var targetDate = new Date(document.getElementById('target_date').dateTime);
    var hours = targetDate.getHours();
    var minutes = targetDate.getMinutes();
    var day = targetDate.getDate();
    var month = targetDate.toLocaleString('default', {
        month: 'short'
    });
    var year = targetDate.getFullYear();

    // Add leading zeros if necessary
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    var formattedTime = hours + ":" + minutes + ", " + month + " " + day + ", " + year;

    // Update the time display
    document.getElementById("show_current_time_and_date").textContent = " | " + formattedTime + " (UTC+8)";
}
