let time = document.getElementById("time");
let date = document.getElementById("date");

function update()
{
    let present = new Date();
    let hours = present.getHours();
    let minutes = present.getMinutes();
    let seconds = present.getSeconds();
    let year = present.getFullYear();
    let month = present.getMonth();
    let day = present.getDate();
    
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let monthname = months[month];
    
    let ampm = "AM";

    if (hours >= 12)
        ampm = "PM";

    if (hours > 12)
         hours -= 12;

    if (hours == 0)
         hours = 12;

    if (minutes < 10)
         minutes = "0" + minutes;

    if(seconds < 10)
        seconds = "0" + seconds;

    time.innerHTML = hours + ":" + minutes + ":" + seconds  + "<span>" + ampm + "</span>";

     date.textContent = monthname + " " + day + ", " + year;
}
update();
setInterval(update, 1000);


