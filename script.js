$(document).ready(function () {
    //shows the current date
    $("#currentDay").text(moment().format("dddd MMMM Do YYYY, h:mm a"));

    // function for tracking the time for the current day for the past, present, and future
    function hourTracker() {
        //get number of hrs
        var currentHour = moment().hour()

    }

    // assign saveBtn to store the user's data
    $(".saveBtn").on("click", function () {
        console.log(this)
    })
})