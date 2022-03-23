//element for save buttons, used with event listener to store content in corresponding text area
var saveButton = document.querySelectorAll(".saveBtn");
//element that will change background color depending on current time and holds the text that will be stored when save button is clicked
var hourBlockEl = document.querySelectorAll(".hour-content");
//element that holds the hour text
var hourEl = document.querySelectorAll(".hour");
//shows current date in header
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY")); 

//loads values from local storage and renders it in the corresponding hourBlockEl
function renderEntries() {
  for ( var i = 0; i < hourEl.length; i++) { 
    var time = hourEl[i].textContent;
    var text = localStorage.getItem(time);
    hourEl[i].nextElementSibling.value = text;
  }
}
renderEntries();

//array to hold the integer of the id for each hourEl. Used later to compare against the current time to dictate color coding
var hourArray = [];
// for loop to collect the id data attribute value into hourArray for comparing against current time 
for ( var i = 0; i < hourEl.length; i++) {
  console.log(hourEl[i]);
  var hourVal = parseInt(hourEl[i].getAttribute("id"));
  hourArray.push(hourVal);
}
console.log(hourArray);

//current time to compare against each time block
var hourNow = moment();
//parse the moment object into an integer
hourNow = parseInt(hourNow.format("H"));
console.log(hourNow);

//for loop to check if the value of hourArray at each index equals hourNow var, then update class accordingly.
for ( var i = 0; i < hourArray.length; i++) {
  console.log(hourArray[i]);
  if (hourNow == hourArray[i]) {
    hourBlockEl[i].classList.add("present");
  } else if (hourNow < hourArray[i]) {
    hourBlockEl[i].classList.add("future");
  } else {
    hourBlockEl[i].classList.add("past");
  }
}

//event listener on save button to store entry text of corresponding hourBlockEl. 
for ( var i = 0; i < saveButton.length; i++) { 
  saveButton[i].addEventListener("click", function (event) {
    var entry = event.target.previousElementSibling.value;
    console.log(entry);
    if(entry == null) {
      return;
    }
    var timeName = event.target.previousElementSibling.previousElementSibling.textContent;
    localStorage.setItem(timeName, entry);
  })
};



