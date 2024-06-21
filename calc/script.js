/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const ul = document.querySelector("ul");

// ul.style.borderWidth = "5px";
// ul.style.borderStyle = "solid";
// ul.style.borderColor = "green";

ul.addEventListener("mouseenter", () => {
  ul.style.borderWidth = "5px";
  ul.style.borderStyle = "solid";
  ul.style.borderColor = "red";
});

ul.addEventListener("mouseleave", () => {
  ul.style.borderWidth = "5px";
  ul.style.borderColor = "blue";
  ul.style.borderStyle = "solid";
});

const ull = ul.getElementsByTagName("*");

function colr(elem) {
  elem.addEventListener("click", () => {
    if (elem.style.backgroundColor != "") {
      elem.style.backgroundColor = "";
    } else elem.style.backgroundColor = "skyblue";
  });
}

for (let item of ull) colr(item);

const body = document.body;
body.addEventListener("keydown", (event) => {
  // event.code holds the current key pressed:
  console.log(event.code);

  // Test for KeyD (the "d" key)
  if (event.code === "KeyD") {
    body.style.backgroundColor === ""
      ? (body.style.backgroundColor = "hsl(201, 34%, 13%)")
      : (body.style.backgroundColor = "");
  }
});
