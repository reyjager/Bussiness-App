function toggleAppDropdown(event) {
    const appDropdown = document.querySelector('.app-manager-dropdown');
    if (appDropdown.style.display === 'none' || appDropdown.style.display === '') {
        appDropdown.style.display = 'block';
    } else {
        appDropdown.style.display = 'none';
    }
    
    // Prevent the click event from propagating to parent elements
    event.stopPropagation();
}

// dropdown dynamic
const dropdown = document.querySelector(".app-manager-dropdown");

// dropdown display
function toggleDropdown() {
    dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
}

// dropdown event listener
dropdown.addEventListener("click", toggleDropdown);
