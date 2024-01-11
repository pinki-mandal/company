

let currentIndex = 0;
const intervalTime = 1000;
const maxSlides = 9; 

function changeSlide(direction) {
  const carouselWrapper = document.getElementById('carouselWrapper');
  const slides = document.querySelector('.carousel-slide');
  const totalSlides = slides.childElementCount;
  const slideWidth = slides.firstElementChild.offsetWidth;

  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  const translateValue = -currentIndex * slideWidth;

  carouselWrapper.style.transform = `translateX(${translateValue}px)`;

  if (currentIndex + 1 === maxSlides) {
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(() => changeSlide(1), intervalTime);













document.addEventListener("DOMContentLoaded", function () {
  var horizontalContainer = document.getElementById('horizontalContainer');
  var paragraphs = [
      "<p>Sitting outside India.when my representative made sure I could <br>purchase an apartment.What else could I have asked for !</p> <h3>Sailesh Gupta</h3><p>ELITA GARDEN VISTA</p>",
      "<p> I have recommended Sandip to 5 friends.Hence,the experience has been good</p><h3>Abhishek Kumar</h3><p>THE SOUL</p>",
      "<p> I have recommended Sandip to 5 friends.Hence ,the experience has been good</p><h3>Arnab Paul</h3><p>PS SOUL</p>",
     
  ];
  var currentIndex = 0;

  function scrollLeftAndAddRight() {
      horizontalContainer.innerHTML += '<div>' + paragraphs[currentIndex] + '</div>';
      currentIndex++;

      horizontalContainer.style.transform = 'translateX(-100%)';


      if (currentIndex < paragraphs.length) {
          setTimeout(function () {
              horizontalContainer.removeChild(horizontalContainer.firstChild);

              
              horizontalContainer.style.transform = 'translateX(-50%)';
              setTimeout(scrollLeftAndAddRight, 5000); 
          }, 500);
      }
  }

  setTimeout(scrollLeftAndAddRight, 5000); 
});
