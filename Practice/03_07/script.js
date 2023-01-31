/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

import workstation from "./workstation.js";

const printWorkstation = (workstation) => {
  var storage = "<ul>";
  for (const drive of workstation.storage) {
    storage += `<li>${drive.capacityInGB / 1000}TB ${drive.type}</li>`;
  }
  storage += "</ul>";
  return `
    <ul>
      <li>Owner: ${workstation.owner}</li>
      <li>Memory: ${workstation.memory.capacityInGB}GB ${workstation.memory.type}</li>
      <li>Storage: ${storage}</li>
    </ul>
  `;
};

document.body.innerHTML = printWorkstation(workstation);
