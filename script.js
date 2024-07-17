document.addEventListener('DOMContentLoaded', function() {
    // Select all navigation links inside <nav>
    const navLinks = document.querySelectorAll('nav a');
  
    // Add click event listener to each navigation link
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        // Prevent default anchor behavior
        event.preventDefault();
  
        // Get the target section ID from the href attribute
        const targetId = this.getAttribute('href').substring(1);
  
        // Find the target section element
        const targetElement = document.getElementById(targetId);
  
        // Scroll the right side
        const rightContainer = document.querySelector('.right');
        if (rightContainer.contains(targetElement)) {
          scrollToElement(rightContainer, targetElement);
          return;
        }
  
        // Scroll the left side
        const leftContainer = document.querySelector('.left');
        if (leftContainer.contains(targetElement)) {
          scrollToElement(leftContainer, targetElement);
          return;
        }
      });
    });
  
    // Function to scroll to target element within a container
    function scrollToElement(container, targetElement) {
      // Calculate scroll position relative to the scrollable container
      const offset = targetElement.offsetTop - container.offsetTop;
  
      // Scroll to the target section with smooth behavior
      container.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  });
  