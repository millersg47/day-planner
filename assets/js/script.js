var saveButton = document.queryCommandIndeterm(".saveBtn");
//element that will change depending on current time
var hourBlockEl = document.querySelectorAll(".hour-content");
//shows current date in header
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY")); 

function renderEntries() {
  localStorage.getItem("entry");
}


//element that holds the hour text to be compared to current time for color coding
var hourEl = document.querySelectorAll(".hour");
var hourArray = [];
// for loop to collect hour text into array for comparing against current time check
for ( var i = 0; i < hourEl.length; i++) {
  console.log(hourEl[i]);
  var hourVal = hourEl[i].textContent;
  hourArray.push(hourVal);
}
console.log(hourArray);

var timeNow = moment();
timeNow = timeNow.format("h a"); 
var timeNowStr = JSON.stringify(timeNow);
timeNowStr =timeNowStr.toUpperCase();
console.log(timeNowStr);
timeNow = timeNow.toUpperCase();
var hourNow = moment();
hourNow = hourNow.format("h");

//for loop to check if hourArray value equals timeNow and update class accordingly. Not working, need to fix. Also, unsure how to check for past or future hours. 
for ( var i = 0; i < hourArray.length; i++) {
  if (timeNowStr == hourArray[i]) {
    hourBlockEl.classList.add("present");
  }
}


// var entry = hourBlockEl.textContent;
// console.log(entry);
// //event listener on save button to store entry text. 
// saveButton.addEventListener("click", function () {
//   if(entry == null) {
//     return;
//   }
//   localStorage.setItem("entry", entry);
//   renderEntries();
// });



