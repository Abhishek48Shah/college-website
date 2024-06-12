// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
//     document.getElementById("navbar").style.top = "-40px"; // Adjust this value to move the navbar up
//   } else {
//     document.getElementById("navbar").style.top = "0";
//   }
// }

  
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
  
