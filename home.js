document.addEventListener('DOMContentLoaded', (event) => {
  /*
  ----------->
  This code manages the display of a responsive navigation bar by toggling visibility and blurring the main content on small screens, saving and restoring the navigation state using local storage, hiding the navbar on large screens, and highlighting the active link based on the current page URL.
  <-----------
  */

  const navbar = document.getElementById('nav2');
  const content = document.getElementById('main');
  const navIcone = document.querySelector('.navIcone');
  const navLinks = document.querySelectorAll('#nav2 a');

  function toggleNav() {
    if (window.innerWidth < 1280) { // Ensure toggle only works on small screens
      if (navbar) {
        navbar.classList.toggle('show');
      }
      if (content) {
        content.classList.toggle('blurred');
      }
      // Save the state to localStorage
      localStorage.setItem('navVisible', navbar.classList.contains('show'));
    }
  }

  // Event listener for the nav icon
  if (navIcone) {
    navIcone.addEventListener('click', toggleNav);
  }

  // Click outside to close the nav
  document.addEventListener('click', function(event) {
    if (window.innerWidth < 1280) { // Ensure toggle only works on small screens
      if (navbar && navIcone) {
        if (!navbar.contains(event.target) && !navIcone.contains(event.target)) {
          navbar.classList.remove('show');
          content.classList.remove('blurred');
          localStorage.setItem('navVisible', 'false');
        }
      }
    }
  });

  // Listen for resize events
  window.addEventListener('resize', function() {
    if (window.innerWidth >= 1280) {
      if (navbar) {
        navbar.classList.remove('show');
      }
      if (content) {
        content.classList.remove('blurred');
      }
    } else {
      // Restore navbar state based on localStorage
      if (localStorage.getItem('navVisible') === 'true') {
        navbar.classList.add('show');
        content.classList.add('blurred');
      } else {
        navbar.classList.remove('show');
        content.classList.remove('blurred');
      }
    }
  });

  // Initialize navbar state based on localStorage and screen size
  if (window.innerWidth < 1280 && localStorage.getItem('navVisible') === 'true') {
    navbar.classList.add('show');
    content.classList.add('blurred');
  }

  // Hide navbar when navigating to another page
  window.addEventListener('beforeunload', () => {
    if (window.innerWidth < 1280) {
      localStorage.setItem('navVisible', 'false');
    }
  });

  // Highlight the active link based on the current URL
  const currentPage = window.location.pathname.split('/').pop();
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
 /*
 --------->
   This code manages the transition of main content and changes the color of the navbar.
<----------
  */
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


  const menuIcon = document.getElementById('menuIcon');
  const menuText = document.getElementById('menuText');
  const menuSvg = document.getElementById('menuSvg');
  const closeSvg = document.getElementById('closeSvg');
  // const nav2 = document.getElementById('nav2');
  // const contentWrapper = document.getElementById('contentWrapper');

  menuIcon.addEventListener('click', () => {
    if (menuText.textContent === 'Menu') {
      menuText.textContent = 'Close';
      menuSvg.classList.add('hidden');
      closeSvg.classList.remove('hidden');
      nav2.classList.remove('hidden');
    } else {
      menuText.textContent = 'Menu';
      menuSvg.classList.remove('hidden');
      closeSvg.classList.add('hidden');
      nav2.classList.add('hidden');
    }
  });

  document.addEventListener('click', (event) => {
    if (!nav2.contains(event.target) && !menuIcon.contains(event.target) && !nav2.classList.contains('hidden')) {
      menuText.textContent = 'Menu';
      menuSvg.classList.remove('hidden');
      closeSvg.classList.add('hidden');
      nav2.classList.add('hidden');
    }
  });



  window.addEventListener('scroll', toggleNavbarColor);
  window.scrollToMain = scrollToMain;
});

document.addEventListener('scroll', function () {
  /*
  --------->
  This code blur the background  and  display image and text  based on a certain distance from the viewport.
  <---------
  */
  const section = document.getElementById('target-section');
  const backgroundOverlay = section.querySelector('.background-overlay');
  const descriptionContainer = section.querySelector('.description-container');
  const sectionTop = section.getBoundingClientRect().top;
  const sectionBottom = section.getBoundingClientRect().bottom;
  const windowHeight = window.innerHeight;

  // Start blurring the background when the section is halfway into the viewport
  const blurTrigger = windowHeight / 8;
  // Show the content when half of the section is visible
  const contentShowTrigger = windowHeight / 8;

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



document.addEventListener('DOMContentLoaded', function() {
  const tooltipSection = document.getElementById('tooltip-section');
  const tooltips = document.querySelectorAll('.tooltip');

  window.addEventListener('scroll', function() {
    const rect = tooltipSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      tooltips.forEach(tooltip => {
        tooltip.classList.add('show-tooltip');
      });
    } else {
      tooltips.forEach(tooltip => {
        tooltip.classList.remove('show-tooltip');
      });
    }
  });
});