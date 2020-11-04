window.addEventListener("load", hours);


function hours() {
    let time = new Date();
    let day = time.getDay();
    let hour = time.getHours();
    console.log(day);
    console.log(hour);
    if((day == 1 || day == 3) && (hour < 13 && hour > 16)) {
        document.getElementById("actionForm").style.display = "flex";
        document.getElementById("form-closed-alert").style.display = "none";
    }
    if((day == 2) && (hour < 9 && hour > 12)) {
        document.getElementById("actionForm").style.display = "flex";
        document.getElementById("form-closed-alert").style.display = "none";
    }
    else {
        document.getElementById("actionForm").style.display = "none";
        document.getElementById("form-closed-alert").style.display = "block";
    }
}
