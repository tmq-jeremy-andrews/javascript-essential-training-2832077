/**
 * Creates a piano key with the corresponding note,
 * mapped keyboard button and a soundfile.
 * @param {string} note
 * @param {string} color
 * @param {string} button
 * @param {string} sound
 */
class Key {
  constructor(note, color, button, sound) {
    this.note = note;
    this.color = color;
    this.button = button;
    this.sound = sound;
  }
}

export default Key;
