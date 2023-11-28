console.log("Lights on!");

$(document).ready(function() {

function generateButton() {
      // Create a new button element
      var newButton = document.createElement("button");
      newButton.innerText = "New Button";

      // Add an event listener to the new button (optional)
      newButton.addEventListener("click", function() {
        alert("You clicked the new button!");
      });

      // Append the new button to the container
      document.getElementById("buttonContainer").appendChild(newButton);
    }