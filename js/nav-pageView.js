function subMenuClick(dataId) {
  console.log("Clicked data-id: " + dataId);

  // Collect all elements with the 'id' attribute
  const idElements = document.querySelectorAll('[id]');

  idElements.forEach(function(element) {
    if (element.id === dataId) {
      console.log("ID attribute: " + element.id + "found me");
    }
  });
}
