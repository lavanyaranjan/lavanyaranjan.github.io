let isPlaying = false;
const audio = new Audio("audio.mp3");
const button = document.querySelector('button');

function onButtonClick() {
  alert("click OK to play/pause the song.");
}

function toggleAudio() {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying = !isPlaying;
}

button.addEventListener('click', () => {
  onButtonClick();
  toggleAudio();
});