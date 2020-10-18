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
        var text = $(this).siblings(".userInput").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })
    //Bring back the saved data and output the data in page
    $("#hour9 .userInput").val(localStorage.getItem("hour9"));   
    $("#hour10 .userInput").val(localStorage.getItem("hour9"));   
    $("#hour11 .userInput").val(localStorage.getItem("hour9"));   
    $("#hour12 .userInput").val(localStorage.getItem("hour9"));   
    $("#hour1 .userInput").val(localStorage.getItem("hour9"));   
    $("#hour2 .userInput").val(localStorage.getItem("hour9"));   
    $("#hour3 .userInput").val(localStorage.getItem("hour9"));   
    $("#hour4 .userInput").val(localStorage.getItem("hour9"));   
    $("#hour5 .userInput").val(localStorage.getItem("hour9"));   
})