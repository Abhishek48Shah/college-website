
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



document.addEventListener('DOMContentLoaded', (event) => {
  const navbar = document.getElementById('nav2');
  const content = document.getElementById('main');
  const navIcone = document.querySelector('.navIcone');

  function toggleNav() {
    if (navbar) {
      navbar.classList.toggle('show');
    }
    if (content) {
      content.classList.toggle('blurred');
    }
  }

  // Event listener for the nav icon
  if (navIcone) {
    navIcone.addEventListener('click', toggleNav);
  }

  // Click outside to close the nav
  document.addEventListener('click', function(event) {
    if (navbar && navIcone) {
      if (!navbar.contains(event.target) && !navIcone.contains(event.target)) {
        navbar.classList.remove('show');
        content.classList.remove('blurred');
      }
    }
  });
});




document.addEventListener('DOMContentLoaded', () => {
  function smoothScroll(target, duration) {
    let targetPosition;
    if (typeof target === 'string') {
      let targetElement = document.querySelector(target);
      if (targetElement) {
        const navbar = document.getElementById('nav1');
        let offset = 0;

        // Check if the navbar is visible
        if (navbar && window.getComputedStyle(navbar).display !== 'none') {
          offset = navbar.offsetHeight;

          // Additional offset for full-screen views
          if (window.innerWidth >= 1024) { // Adjust this threshold as needed
            offset += 35; // Additional space for full screens, adjust this value as needed
          }
        }

        targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
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
    smoothScroll('#main', 1000);
  }

  function toggleNavbarColor() {
    const navbar1 = document.getElementById('nav1');
    const navbar2 = document.getElementById('nav2');
    const main = document.getElementById('main');
    const distanceToMain = main.getBoundingClientRect().top;

    if (distanceToMain <= 150) { // Adjust this value as needed
      navbar1.classList.add('bg-blue-900', 'text-white');
      navbar1.classList.remove('bg-white', 'text-black');
      navbar2.classList.add('bg-color', 'text-black');
      navbar2.classList.remove('text-white');
      navbar2.classList.add('shadow-navbar'); // Add shadow class
    } else {
      navbar1.classList.remove('bg-blue-900', 'text-white');
      navbar2.classList.add('text-white');
      navbar2.classList.remove('bg-color', 'shadow-navbar'); // Remove shadow class
    }
  }

  window.addEventListener('scroll', toggleNavbarColor);
  window.scrollToMain = scrollToMain;
});

document.addEventListener('scroll', function() {
  const section = document.getElementById('target-section');
  const backgroundOverlay = section.querySelector('.background-overlay');
  const descriptionContainer = section.querySelector('.description-container');
  const sectionTop = section.getBoundingClientRect().top;
  const sectionBottom = section.getBoundingClientRect().bottom;
  const windowHeight = window.innerHeight;

  // Start blurring the background when the section is halfway into the viewport
  const blurTrigger = windowHeight/8;
  // Show the content when half of the section is visible
  const contentShowTrigger =  windowHeight/8;

  if (sectionTop < blurTrigger && sectionBottom > 0) {
    // Section is at least halfway into the viewport
    backgroundOverlay.classList.add('blur');
  } else {
    // Section is not halfway into the viewport
    backgroundOverlay.classList.remove('blur');
  }

  if (sectionTop < contentShowTrigger && sectionBottom > 0) {
    // Section is more than halfway visible, show content
    descriptionContainer.classList.add('show');
  } else {
    // Section is not enough visible, hide content
    descriptionContainer.classList.remove('show');
  }
});
