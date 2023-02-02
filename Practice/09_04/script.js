/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

import Piano from "./modules/Piano.js";

const piano = new Piano();

const container = document.querySelector(".container");

container.append(piano.generate());

window.addEventListener("keydown", (event) => {
  // If pressed key is not bound to a note, do nothing
  const note = piano.getBoundNote(event.key);
  if (!note) {
    return;
  }

  // If no matching key exists, do nothing
  const key = document.querySelector(`.${note}`);
  if (!key) {
    return;
  }

  const audio = key.querySelector("audio");
  audio.cloneNode(true).play();
});
