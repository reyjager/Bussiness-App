function toggleAccountMenu(event) {
    const account = event.currentTarget;
    const accountMenu = account.querySelector('.account-menu');
    accountMenu.style.display = accountMenu.style.display === 'block' ? 'none' : 'block';
    account.classList.toggle('open');
}

// Close the account menu when clicking outside of it
document.addEventListener('click', function(event) {
    const account = document.querySelector('.account');
    const accountMenu = account.querySelector('.account-menu');
    if (!account.contains(event.target)) {
        accountMenu.style.display = 'none';
        account.classList.remove('open');
    }
});


// function toggleAccountMenu(event) {
//     const accountMenu = event.currentTarget.querySelector('.account-menu');
//     if (accountMenu.style.display === 'block' || accountMenu.style.display === '') {
//         accountMenu.style.display = 'none';
//     } else {
//         accountMenu.style.display = 'block';
//     }
// }

/***************************/
 // Get the current date and time
 const currentDate = new Date();

 // Format the date as a string
 const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
 const formattedDate = currentDate.toLocaleDateString(undefined, options);

 // Display the date on the webpage
 document.getElementById("currentDate").textContent =  formattedDate;


 function shrinkBtnClick(event) {
    // Select the .content and .accord elements
    // const content = document.querySelector('.content');
    const accord = document.querySelector('.accord');
    const navbar = document.querySelector('.main-nav');
    const logo = document.getElementById("img-logo");
    const mlogo = document.querySelector(".logo");
    const accordButtons = document.querySelectorAll(".accord-button");
    const widthC = document.querySelector(".content");
    const widthHC =document.querySelector(".header-content");

    navbar.style.transition = 'width 0.5s';
   
    accordButtons.forEach(function(button) {
      const subElements = button.querySelectorAll('*'); // Selects all elements within the current .accord-button
      const firstChild = button.firstElementChild;
    
      subElements.forEach(function(subElement) {
        // Check if subElement is not the first child of the .accord-button
        if (subElement === firstChild) {
          return; // Skip the first child, don't add the "hideme" class
        }
    
        // Check if the "hideme" class is already present, and toggle it
        if (subElement.classList.contains('hideme')) {
          subElement.classList.remove('hideme');
          navbar.style.width = '226px';
          navbar.style.justifyContent = 'space-around';
          
          widthC.style.marginLeft = '226px';
          widthHC.style.marginLeft = '226px';
          
          navbar.style.transition = widthHC.style.transition = widthC.style.transition ='width 0.9s';
      
        } else {
          // accordButtons.classList.add('hideme'); // make sure that  if accord-body is open. it should be closed
          subElement.classList.add('hideme');
            navbar.style.width = '60px';
            widthC.style.marginLeft = '60px';
            widthHC.style.marginLeft = '60px';
            navbar.style.transition = widthHC.style.transition = widthC.style.transition ='width 0.5s';

       
        }
      });
    });
    
  /***********for logo ********** */
    // Find the logo element by its id

    const width = logo.offsetWidth; // Get the width
    const height = logo.offsetHeight; // Get the height
  
  // Check the current logo source
    if (logo.src.includes("sste_logo.jpg")) {
      // If the current logo source is the original one, change it to the new logo
   
      logo.style.width  = '55px';
      mlogo.style.height ='15px';
      mlogo.style.transition ='height .5s';
      logo.style.transition = 'width 0.5s';
      logo.src = "/images/hoberman.jpeg";
  
    } else {
      // If the current logo source is the new logo or any other source, change it back to the original logo
      logo.src = "/images/sste_logo.jpg";
      logo.style.width = '175px'
      logo.style.height = 'height'
      logo.style.transition = 'width 0.5s';
      mlogo.style.transition ='height .5s';
      mlogo.style.height ='100px';
    
    }
    
  }