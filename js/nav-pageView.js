
// Add a click event handler to all <li> elements within the .accord-body section
document.querySelectorAll('.accord-body li').forEach(function(li) {
  li.addEventListener('click', function(event) {
    // Extract the data-id attribute value
    var dataId = this.querySelector('a').getAttribute('data-id');
    
    viewPage(dataID); // This will add the "openPage" class to the element with id "view-invoices" if it exists.

    // Display an alert with the selected dataId
    alert('You Selected ' + dataId);
    
  });
});

function viewPage(dataID) {
  // Query for elements by their IDs
  var element = document.querySelectorall('id');

  // Check if the element with the specified ID exists
  if (element === dataID) {
    // Add the "openPage" class to the element
    element.classList.add('openPage');
  }
}
