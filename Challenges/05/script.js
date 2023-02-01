// Create a new element for a nav menu
const nav = document.createElement("nav");

// Add css properties to nav
nav.style.position = "fixed";
nav.style.width = "100%";

// Create undordered list with five items
const navItems = ["Home", "Shop", "About", "Contact Us", "Account", "Careers"];
const list = document.createElement("ul");

// Add css property to list
list.style.display = "grid";
list.style.gridTemplateColumns = `repeat(${navItems.length}, 1fr)`;
list.style.gridAutoRows = "auto";

// Create the navbar list items
for (const item of navItems) {
  // Create an a tag containing the item text
  const link = document.createElement("a");
  link.setAttribute("href", "#");
  link.innerHTML = item;

  // Create the list item
  const listItem = document.createElement("li");

  // Add the link to the list item
  listItem.append(link);

  // Add css property to list item
  listItem.style.display = "inline-grid";

  // Add list item to the list
  list.append(listItem);
}

// Add unordered list to the nav
nav.append(list);

// Add new navigation menu to the DOM directly after the header
document.body.append(nav);
