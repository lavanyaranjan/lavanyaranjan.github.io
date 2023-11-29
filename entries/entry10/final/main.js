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

document.addEventListener('DOMContentLoaded', function() {
  var image = document.getElementById('hiddenImage');
  var container = document.getElementById('imageContainer');

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function showImageOnScroll() {
    if (isElementInViewport(container)) {
      image.classList.add('image-visible');
    }
  }

showImageOnScroll();

window.addEventListener('scroll', showImageOnScroll);