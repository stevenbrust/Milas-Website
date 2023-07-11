//Mila's Age Clock
function calculateAge() {
    var adoptionDate = new Date("2021-10-24"); // Replace with the actual adoption date
    var currentDate = new Date();
    var diff = currentDate - adoptionDate;
    var ageInDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    var ageInYears = Math.floor(ageInDays / 365);
  
    var ageElement = document.getElementById("age");
    ageElement.innerHTML = ageInYears + " year old since adoption";
  
    // Add or remove "active" class based on the active state
    if (ageInYears % 2 === 0) {
      ageElement.classList.add("active");
    } else {
      ageElement.classList.remove("active");
    }
  }
  
  setInterval(calculateAge, 1000); // Update the age every second

// Hamburger Menu
// Get the necessary elements
var menuToggle = document.getElementById("menu-toggle");
var menuToggleLabel = document.getElementById("menu-toggle-label");
var menu = document.getElementById("menu");

// Add click event listener to the menu toggle button
menuToggle.addEventListener("click", function() {
  // Toggle the "active" class on the menu toggle label and menu element
  menuToggleLabel.classList.toggle("active");
  menu.classList.toggle("active");
});

//Arrows for images
// Select all sections with class "content-section.golfbackground"
const sections = document.querySelectorAll('.content-section.golfbackground');

// Loop through each section
sections.forEach((section) => {
  const imageContainer = section.querySelector('.image-container-3');
  const arrowLeft = section.querySelector('.arrow-left');
  const arrowRight = section.querySelector('.arrow-right');
  const images = imageContainer.querySelectorAll('img');
  let currentImageIndex = 0;

  function displayImage() {
    images.forEach((image, index) => {
      if (index === currentImageIndex) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  }

  arrowLeft.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    displayImage();
  });

  arrowRight.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    displayImage();
  });

  displayImage();
});
