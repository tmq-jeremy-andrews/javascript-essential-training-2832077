/**
 * OBJECTIVES
 * - Remove an item with specific content from the array
 */

import Website from "./Website.js";

// Define a list of Website objects
const websites = [
  new Website("reddit.com", "entertainment"),
  new Website("linkedin.com", "work"),
  new Website("gov.ph", "government"),
  new Website("netflix.com", "entertainment"),
  new Website("google.com", "search engine"),
];

console.log("Websites before removal: ", websites);

// Iterate throug all contents of the array
websites.forEach((website, index) => {
  // If website category is entertainment
  if (website.category == "entertainment") {
    // Remove 1 element at the index
    websites.splice(index, 1);
  }
});

console.log("Websites after removal: ", websites);
