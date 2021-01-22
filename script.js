$(document).ready(function () {
  // Used Luxon instead of Moment.js 
  var currentTime = luxon.DateTime.local().hour;

  // When save button is clicked - that hour's input is saved to local storage
  $(".saveBtn").on("click", function () {
    var activity = $(this).siblings(".textBox").val();
    console.log(activity);
    var hour = $(this).parent().attr("id");
    localStorage.setItem(hour, activity);
  });

  // Brings text back from local storage to correct box for each hour (upon refresh)
  $("#hour-9 .textBox").val(localStorage.getItem("hour-9"));
  $("#hour-10 .textBox").val(localStorage.getItem("hour-10"));
  $("#hour-11 .textBox").val(localStorage.getItem("hour-11"));
  $("#hour-12 .textBox").val(localStorage.getItem("hour-12"));
  $("#hour-13 .textBox").val(localStorage.getItem("hour-13"));
  $("#hour-14 .textBox").val(localStorage.getItem("hour-14"));
  $("#hour-15 .textBox").val(localStorage.getItem("hour-15"));
  $("#hour-16 .textBox").val(localStorage.getItem("hour-16"));
  $("#hour-17 .textBox").val(localStorage.getItem("hour-17"));

  // for each row - find the hour
  $(".row").each(function () {
    var rowHour = parseInt($(this).attr("id").split("-")[1]);
    // console.log(rowHour);

    // sets textareas' colors depending on time of day 
    if (currentTime === rowHour) {
      $(this).addClass("present")
    } else if (currentTime > rowHour) {
      $(this).addClass("past")
    } else {
      $(this).addClass("future")
    }
  });

  // Luxon's Time Api - puts current day and time in jumbotron 
  const DateTime = luxon.DateTime;
  const dt = DateTime.fromISO(new Date().toISOString());
  var day = (dt.toFormat('EEEE, MMMM yyyy'));
  var time = (dt.toFormat('hh:mm a'));

  $("#currentDay").text(day + "  @  " + time).css('font-weight', '400');

});










