function updateTime() {
    // Create a new Date object
    const now = new Date();

    // Extract hours, minutes, and seconds
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Determine AM or PM
    let ampm = 'AM';
    if (hours >= 12) {
        ampm = 'PM';
    }

    // Convert hour to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // If hour is 0, set it to 12

    // Format minutes and seconds to always be two digits
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    // Combine hours, minutes, and seconds with AM/PM
    const formattedTime = hours + ':' + formattedMinutes + ':' + formattedSeconds + ' ' + ampm;

    // Display the formatted time
    document.getElementById('current-time').textContent = formattedTime;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to display the time immediately on load
updateTime();
