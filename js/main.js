let navBtn = document.getElementById('navBtn');
let sideNav = document.getElementById('sidenav');
let isOpen = 0;
navBtn.addEventListener("click", function () {
    if (isOpen == 0) {
        isOpen = 1;
        navBtn.innerHTML = "&#xf00d;";
        sideNav.style.display = "block";
        sideNav.style.animation = "openNav 0.5s ease-in-out";
        sideNav.addEventListener("animationend", function() {
            sideNav.style.display = "block";
        });
    } else if (isOpen == 1) {
        isOpen = 0;
        navBtn.innerHTML = "&#xf0c9;";
        sideNav.style.animation = "closeNav 0.5s ease-in-out";
        sideNav.addEventListener("animationend", function() {
            sideNav.style.display = "none";
        });
    }
});

let clock = document.getElementById('clock');
clock.onload = currentTime(clock);

function currentTime(object) {
    let date = new Date;
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    hour = (hour < 10)? "0" + hour : hour;
    minute = (minute < 10)? "0" + minute : minute;
    second = (second < 10)? "0" + second : second;

    let time = hour + " : " + minute + " : " + second;
    object.innerHTML = time;

    // change clock value once per second with recursion function
    setInterval(function() {
        currentTime(object);
    },1000);
};




