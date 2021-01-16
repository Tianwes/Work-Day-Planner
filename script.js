// when text box of a certain hour is clicked
// - save user's input to local storage so it displays when they come back


// minjs clock follows the hour of the day

// when 
// -hour has passed - box turns gray 
// -on the hour - box turns red 
// -future hours - box is green

// moment().calendar();
// https://momentjs.com/docs/#/query/ 
// look at is same and/or before 

// would i create data-set w/ numbers and put into for loop
// to add event lister cuz you can only add event listener to one 
// element at time

// textArea = document.getElementById('textArea');

// userText = $('textArea').val();
// console.log(userText)
// console.log(fieldValue)
$(document).ready(function () {

    // need get from storage here 

    // $("#textArea").val(localStorage.getItem ("userText"));
    // localStorage.getItem("userText");
// -get button el
// - optionEl.forEach(optionEl => {
//     var number = optionEl.dataset['number'];
//     optionEl.innerText = currentQuestion["option" + number];
// });
$( ".saveBtn" ).each(function(index ) {
    // textArea = document.getElementById('textArea');
    // userText = $('textArea').val();
    // var dataNums = index + ": " + $( this ).text() ;
    // console.log("index- " + index);
    // console.log("this- " + this);
    
    // console.log()

    $(".saveBtn").on("click", function () {
        textArea = document.getElementById('textArea');
        userText = $('textArea').val();
        // console.log(userText)
        localStorage.setItem ("UserInput", userText);
    });

});
});