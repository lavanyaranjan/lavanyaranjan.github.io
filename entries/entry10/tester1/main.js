let isPlaying = false;
    const audio = new Audio("audio.mp3");
    const button1 = document.querySelector('.button1');
    const maintext = document.getElementById('maintext'); // Correct ID selector

    function toggleAudio() {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      isPlaying = !isPlaying;
    }

    button1.addEventListener('click', function() {
      toggleAudio();
      maintext.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });