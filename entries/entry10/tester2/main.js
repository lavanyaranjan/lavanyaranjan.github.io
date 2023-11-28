let isPlaying = false;
const audio = new Audio("audio.mp3");
const button = document.querySelector('button');

function toggleAudio() {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying = !isPlaying;
}

button.addEventListener('click', () => {
  toggleAudio();
});