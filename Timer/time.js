(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    
    const targetDate = new Date("august 17, 2024 23:59:59").getTime();

    // Update the countdown every 1 second
    const x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = targetDate - now;

        document.getElementById("days").innerText = Math.floor(distance / day);
        document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
        document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
        document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

        
        if (distance < 0) {
            document.getElementById("headline").innerText = "The event has started!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
        }
    }, 1000);
}());
