//your JS code here. If required.
// Get the target element by its id
var targetElement = document.getElementById('level');

// Function to determine the DOM level of the target element
function getDOMLevel(element) {
    var level = 0;
    var currentElement = element;

    // Traverse up through parent elements until reaching the root html element
    while (currentElement !== document.documentElement) {
        level++;
        currentElement = currentElement.parentNode;
    }

    // Add 1 to include the root html element
    return level + 1;
}

// Get the DOM level of the target element
var domLevel = getDOMLevel(targetElement);

// Display the result using alert
alert("The level of the element is: " + domLevel);
