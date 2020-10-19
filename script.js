$(document).ready(function () {
    //shows the current date
    $("#currentDay").text(moment().format("dddd MMMM Do YYYY, h:mm a"));

    // function for tracking the time for the current day for the past, present, and future
    function hourTracker() {
        //Time now
        var currentHour = moment().hour();

        $(".time-block").each(function() {
            //the times on the page
            var pageHour = parseInt($(this).attr("id").split("hour")[1]);
            //if the current time pass the times on the page then, the past time blocks will become gray   
            if (pageHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            //if the current time and the block time are them same then, the time block will become red 
            else if (pageHour === currentHour) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            //if the current time has not yet pass the future time then. the time blocks for the future time will be green
            else {
                $(this).removeClass("past");
                $(this).addClass("future");
                $(this).removeClass("present");
            }
        })
    }
    hourTracker();

    // assign saveBtn to store the user's data
    $(".saveBtn").on("click", function () {
        //this will log the user's input and save it to the local storage 
        console.log(this);
        var text = $(this).siblings(".userInput").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })
    //Bring back the saved data and output the data in page
    $("#hour9 .userInput").val(localStorage.getItem("hour9"));   
    $("#hour10 .userInput").val(localStorage.getItem("hour10"));   
    $("#hour11 .userInput").val(localStorage.getItem("hour11"));   
    $("#hour12 .userInput").val(localStorage.getItem("hour12"));   
    $("#hour13 .userInput").val(localStorage.getItem("hour13"));   
    $("#hour14 .userInput").val(localStorage.getItem("hour14"));   
    $("#hour15 .userInput").val(localStorage.getItem("hour15"));   
    $("#hour16 .userInput").val(localStorage.getItem("hour16"));   
    $("#hour17 .userInput").val(localStorage.getItem("hour17"));   
})