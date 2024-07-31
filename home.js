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
  


function toggleNav() {
  const navbar = document.getElementById('navbar');
  const content = document.getElementById('main');
  navbar.classList.toggle('show');
  content.classList.toggle('blurred');
}

document.addEventListener('click', function(event) {
  const navbar = document.getElementById('navbar');
  const content = document.getElementById('main');
  const navIcone = document.querySelector('.navIcone');

  if (!navbar.contains(event.target) && !navIcone.contains(event.target)) {
    navbar.classList.remove('show');
    content.classList.remove('blurred');
  }
});








function smoothScroll(target, duration) {
  let targetPosition;
  if (typeof target === 'string') {
    let targetElement = document.querySelector(target);
    if (targetElement) {
      targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset-100;
    } else {
      console.error('Target element not found');
      return;
    }
  } else if (typeof target === 'number') {
    targetPosition = target;
  } else {
    console.error('Invalid target type');
    return;
  }

  let startPosition = window.pageYOffset;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, targetPosition - startPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

function scrollToMain() {
  smoothScroll('main', 1000); // Scroll to <main> over 1000 milliseconds (1 second)
}

function scrollToPosition(position) {
  smoothScroll(position, 1000); // Scroll to a specific position over 1000 milliseconds (1 second)
}
