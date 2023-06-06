/**
 * Converted to elements instead of calling them within the functions.
 *
 */
const blueBtn = document.getElementById("button");
const alertBtn = document.getElementById("alert");
const hoverBtn = document.getElementById("hover-this");
const popOutVal = document.getElementById("popup-input");
const paragraph = document.getElementById("paragraph");
/**
 * First , changed into addEventListner, as it is more readable.
 *  onclick ==> click
 */

blueBtn.addEventListener("click", () => {
  setBackgroundColorById("paragraph", "blue");
});

alertBtn.addEventListener("click", () => {
  alert(popOutVal.value);
});

hoverBtn.addEventListener("mouseover", () => {
  setBackgroundColorById("body", "red");
});

hoverBtn.addEventListener("mouseout", () => {
  setBackgroundColorById("body", "white");
});

paragraph.addEventListener("mouseover" , () =>{
  setBackgroundColorById("body", "purple");
});

paragraph.addEventListener("mouseout" , () =>{
  setBackgroundColorById("body", "white");
});

let getValueFromId = (id) => document.getElementById(id).value;

let setBackgroundColorById = (id, color) => {
  document.getElementById(id).style = "background-color: " + color;
};

let mouseOverFunction = (el) => (el.style = "background-color: black");
