// get all elements from the html
// buttons
const getDateButton = document.getElementById("getDateButton");
const getRandomButton = document.getElementById("getRandomButton");
const getRandomRangeButton = document.getElementById("getRandomRangeButton");
// output divs
const timeOutput = document.getElementById("timeOutput");
const randomOutput = document.getElementById("randomOutput");
const randomRangeOutput = document.getElementById("randomRangeOutput");
// link python functions to the buttons
getDateButton.addEventListener("click", () => {
    timeOutput.innerText = app.getCurrentDateAndTime();
});
getRandomButton.addEventListener("click", () => {
    randomOutput.innerText = app.getRandomButton();
});
getRandomRangeButton.addEventListener("click", () => {
    randomRangeOutput.innerText = app.getRandomRangeButton
})
