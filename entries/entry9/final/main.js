console.log("Lights on!");

let wrapper = document.querySelector(".wrapper");
let buttonClicked = false;

function createNewContentAndButton(text) {
  let newContent = document.createElement("div");
  newContent.classList.add("new-content");
  newContent.innerHTML = text;

  let newButton = document.createElement("div");
  newButton.classList.add("button");
  newButton.innerHTML = "Click me";
  newButton.addEventListener("click", function(event) {
    if (!buttonClicked) {
      console.log("Button clicked!");
      wrapper.appendChild(newContent);

  if (text === "i'm trying to make up my mind, just how i feel") {
    setTimeout(() => createNewContentAndButton("can you tell me what's real?");
      } else if (text === "can you tell me what's real?") {
      setTimeout(() => createNewContentAndButton("i hear your voice on the phone, now i'm no longer alone, just how i feel");
      } else if (text === "i hear your voice on the phone, now i'm no longer alone, just how i feel") {
      setTimeout(() => createNewContentAndButton("can you tell me what's real anymore?");
      }

      buttonClicked = true;
    }
  });

  wrapper.appendChild(newButton);
  wrapper.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

let button = document.querySelector(".button");
button.addEventListener("click", function(event) {
  console.log(event, event.target);
  let newItem = document.createElement("div");
  newItem.classList.add("new-content");
  newItem.innerHTML = "i'm trying to make up my mind, just how i feel";
  wrapper.appendChild(newItem);

  if (!buttonClicked) {
    setTimeout(() => createNewContentAndButton("i'm trying to make up my mind, just how i feel");
    buttonClicked = true; // Set the flag to indicate the button has been clicked
  }