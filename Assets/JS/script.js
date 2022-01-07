var today = moment().format("dddd,  LL, LT");
//variable for today in the format to show current time

$("#currentDay").text(today);
//adds to jumbotron

// moment.js
var liveTime = new Date().getHours();
console.log(liveTime)

var timeCounter = Array.from(document.getElementsByTagName('textarea'));
console.log(timeCounter);
//Constructing array to snag the rows

//Function to have dynamic hour class applied to input area
function changeColor(){
    for (var i=0; i<timeCounter.length; i++) {
        var singleBlock = timeCounter[i];
        //Adding present class if in the present
        if (singleBlock.dataset.number == liveTime) {
            singleBlock.classList.add("present");
        }
        //Adding past
        if (singleBlock.dataset.number < liveTime) {
            singleBlock.classList.add("past");
        }
        //Adding Future
        if (singleBlock.dataset.number > liveTime) {
            singleBlock.classList.add("future");
        }  
    }  
}
changeColor();
//Running

// Accesing local saved data
function getData(){
    for (var j = 0; j < localStorage.length; j++) {
        var keyNumbers = localStorage.key(j);
        // using a variable to save the syntax
        timeCounter.forEach(function(item) {
            if (item.dataset.number == keyNumbers) {
                item.value = localStorage.getItem(keyNumbers)
            }
        })   
    }
}

getData();

//Save button 
$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    //prevent refresh
    var notes = $(this).siblings("textarea").val();
    var rowHourActive = $(this).siblings("textarea").data("number");
    window.localStorage.setItem(rowHourActive, notes);
    
});





