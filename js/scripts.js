// getting elements from HTML code and assigning them variables
var list = document.getElementById('js-list'),
    button = document.getElementById('js-addElem');

// my function that listens for events
button.addEventListener('click', function() {
  // add new elemnet
  var newElement = document.createElement('li');
  // count how much the item is on the page
  var number = document.getElementsByTagName('li').length;
  // and count: number a new element 'item'
  var nowNumber = number + 1;
  // change content a new element: 'item' and number of item
  newElement.innerHTML = 'item' + nowNumber;

  // IMPORTANT -> calling the element created at the beginning
  list.appendChild(newElement);

});
