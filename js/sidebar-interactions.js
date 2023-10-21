

function menuButtonClick(event) {
  // Find all elements with the class 'accord-button'
  var allAccordButtons = document.querySelectorAll('.accord-button');
  
  // Find all <i> elements with the class 'fa-solid fa-chevron-down'
  var chevrons = document.querySelectorAll('.fa-solid.fa-chevron-down');
  
  // Find the <i> element inside the clicked .accord-button, which is the target to change
  var iconElement = event.currentTarget.querySelector('.fa-solid.fa-chevron-down');
  
  // Check if the clicked .accord-button already has the 'selected-item' class
  var isAlreadySelected = event.currentTarget.classList.contains('selected-item');

  // Remove the 'rotateup' class from all <i> elements
  chevrons.forEach(function (chevron) {
    chevron.classList.remove('rotateup');
    chevron.classList.add('rotatedown');
  });
  
  // Remove the 'selected-item' class from all .accord-button elements
  allAccordButtons.forEach(function (button) {
    button.classList.remove('selected-item');
  });

  // Toggle the 'rotateup' class on the <i> element
  if (!isAlreadySelected) {
    iconElement.classList.remove('rotatedown');
    iconElement.classList.add('rotateup');
    event.currentTarget.classList.add('selected-item');
  }
}

/************************************* */

// Function to remove active from all menu items and hide all submenus
function removeAllActiveFromMenu() {
  const menuItems = document.querySelectorAll('.menu');
  const subMenus = document.querySelectorAll('.sub-menu');

 

  menuItems.forEach((menuItem) => {
    menuItem.classList.remove('active');
    
  });

  subMenus.forEach((subMenu) => {
    subMenu.style.display = 'none';
    // childElement.style.color = "rgb(9, 96, 96)";
  });
}


document.addEventListener('DOMContentLoaded', function () {
  var accordButtons = document.querySelectorAll('.accord-button');

  accordButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var targetId = button.getAttribute('data-collapse-target');


             // Toggle the chevron rotation
        var chevronIcon = button.querySelector('[class="fa-chevron-down"]');
        if (chevronIcon) {
          chevronIcon.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
        }
      
    });
  });
});


function addHoverEffect(className, childTagName) {
  const elements = document.querySelectorAll(`.${className}`);

  elements.forEach(item => {
    item.addEventListener("mouseover", function() {
      if (!this.classList.contains('selected')) {
        this.style.backgroundColor = "rgb(9, 96, 96)";
        const childElement = this.querySelector(childTagName);
        if (childElement) {
          childElement.style.color = "white"; // Change the text color to contrast
        }
      }
    });

    item.addEventListener("mouseout", function() {
      if (!this.classList.contains('selected')) {
        this.style.backgroundColor = "";
        const childElement = this.querySelector(childTagName);
        if (childElement) {
          childElement.style.color = "#3a3b6c"; // Reset the text color to #3a3b6c
        }
      }
    });
  });
}

function initializeAccordion(selector, childTagName) {
  const accordElements = document.querySelectorAll(selector);

  accordElements.forEach(element => {
    element.addEventListener("click", function () {
      if (!this.classList.contains('selected')) {
        deselectAllItems();
        this.classList.add('selected');
        this.style.backgroundColor = "rgb(9, 96, 96)";
        localStorage.setItem(`itemClicked-${this.dataset.index}`, "true");
      }
    });
  });

  function deselectAllItems() {
    accordElements.forEach(element => {
      if (element.classList.contains('selected')) {
        element.classList.remove('selected');
        element.style.backgroundColor = "";
        localStorage.removeItem(`itemClicked-${element.dataset.index}`);
        const childElement = element.querySelector(childTagName);
        if (childElement) {
          childElement.style.color = "#3a3b6c"; // Reset the text color to #3a3b6c
        }
      }
    });
  }
}

// Apply the hover effect to the "accord-button" class with <span> tags
addHoverEffect("accord-button", "span");

// Apply the hover effect to the "accord-body" class with <a> tags
addHoverEffect("accord-body li", "a");

// Apply the accordion behavior to "accord-body" class
initializeAccordion(".accord-body li", "a");

/***************************hover******************************************* */

function addHoverEffect(className) {
  const elements = document.querySelectorAll(`.${className}`);

  elements.forEach(item => {
    item.addEventListener("mouseover", function() {
      this.style.backgroundColor = "rgb(9, 96, 96)";
      this.querySelectorAll("*").forEach(childElement => {
       
        childElement.style.color = "white"; // Change the text color to contrast for all child elements
      });
    });

    item.addEventListener("mouseout", function() {
      this.style.backgroundColor = "";
      this.querySelectorAll("*").forEach(childElement => {
        childElement.style.color = ""; // Reset the text color for all child elements
      });
    });
  });
}

// Apply the hover effect to the "accord-button" class
addHoverEffect("accord-button");


/******************* */
