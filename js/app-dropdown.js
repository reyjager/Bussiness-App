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