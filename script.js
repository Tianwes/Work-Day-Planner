// when 
// -hour has passed - box turns gray 
// -on the hour - box turns red 
// -future hours - box is green

// moment().calendar();
$(document).ready(function () {
  var currentTime = luxon.DateTime.local().hour;
  console.log(currentTime)

  $(".saveBtn").on("click", function () {
    var activity = $(this).siblings(".textBox").val();
    console.log(activity);
    var hour = $(this).parent().attr("id")
    // console.log(hour);
    localStorage.setItem(hour, activity)
  })
  
});










