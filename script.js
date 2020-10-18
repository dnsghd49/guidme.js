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
        //this will log the user's input and save it to the local storage 
        console.log(this)
        var text = $(this).siblings(".test").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })

    $("#hour9 .test").val(localStorage.getItem("hour9"));   
})