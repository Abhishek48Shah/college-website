/*

------------------------------
dropDown box------------------ 
------------------------------
*/
document.addEventListener('DOMContentLoaded', () => {
    const dropdownButtons = document.querySelectorAll('.dropbtn');
  
    dropdownButtons.forEach(dropbtn => {
      dropbtn.addEventListener('click', (event) => {
        event.preventDefault();
        const dropdownContent = dropbtn.nextElementSibling;
  
        // Close any other open dropdowns
        document.querySelectorAll('.down').forEach(content => {
          if (content !== dropdownContent) {
            content.style.display = 'none';
          }
        });
  
        // Toggle the clicked dropdown
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
      });
    });
  
    // Close the dropdowns if the user clicks outside of any dropdown
    window.addEventListener('click', (event) => {
      if (!event.target.matches('.dropbtn')) {
        document.querySelectorAll('.down').forEach(content => {
          content.style.display = 'none';
        });
      }
    });
  });
  
  window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var main = document.getElementById('main');
    var distanceToMain = main.getBoundingClientRect().top;
  
    // Check if the main content is within 100 pixels of the nav
    if (distanceToMain <= 170) {
      navbar.classList.add('color-change');
    } else {
      navbar.classList.remove('color-change');
    }
  });
  window.addEventListener('scroll', function() {
    var contactSection = document.querySelector('.contact');
    var main = document.getElementById('main');
    var distanceToMain = main.getBoundingClientRect().top;
  
    // Check if the main content is within a certain distance of the contact section
    if (distanceToMain <= 170) { // Adjust the '100' value as needed
      contactSection.classList.add('color-change');
    } else {
      contactSection.classList.remove('color-change');
    }
  });
  function scrollToMain() {
    var mainElement = document.getElementById('main');
    var offset = 100; // The distance you want to stop before reaching 'main', in pixels
    var bodyRect = document.body.getBoundingClientRect().top;
    var elementRect = mainElement.getBoundingClientRect().top;
    var elementPosition = elementRect - bodyRect;
    var offsetPosition = elementPosition - offset;
  
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }