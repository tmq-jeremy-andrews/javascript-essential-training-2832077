/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

/**
 * - Find an element and add two different classes
 * - Remove only one of the new classes
 * - Add a new attribute to an element
 * - Request the value of the attribute
 * - Change the value of the attribute
 * - Add some inline CSS to an element by specifying the
 *   style property and setting its value.
 * - Query the style property of an element in the console to
 *   get a list of all the style properties available.
 */

// Get the desired element
const target = document.querySelector(".maincontent .page-header");

// Add two different classes
target.classList.add("keep-this");
target.classList.add("remove-this");

// Remove one of the new classes
target.classList.remove("remove-this");

// Add a new attribute
target.setAttribute("float", "left");

// Change the value of the attribute
target.setAttribute("float", "right");

// Add inline CSS
target.style.background = "#1c1c1c";
target.style.color = "#f7f7f7";

// Log the style property to the console
console.log(target.style);
