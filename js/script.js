$(document).ready(function(){
    /***
     * get current date
     */
    const date = new Date();
    const hour = date.getHours();
    console.log(hour)
    let message ="";
    if (hour <= 12) {
        message = "Good Morning";
    } 
    if (hour > 12) {
        message = "Good Aftrnoon";
    }
    if (hour >= 17) {
        message = "Good evening";
    }
    $("#headingtext").empty().append(message + " " + ",From Samnang Methiny");
})