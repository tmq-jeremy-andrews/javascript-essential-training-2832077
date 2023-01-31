/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  setName: function (newName) {
    this.name = newName;
  },

  volume: 30,
  setVolume: function (newVolume) {
    this.volume = newVolume;
  },

  color: "grey",
  setColor: function (newColor) {
    this.color = newColor;
  },

  pocketNum: 15,
  setPocketNum: function (newPocketNum) {
    this.pocketNum = newPocketNum;
  },

  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },

  strapLength: {
    left: 26,
    right: 26,
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("Before setters: ", backpack);
backpack.setColor("red");
backpack.setName("Jansport");
backpack.setPocketNum(1);
backpack.setVolume(15);
backpack.newStrapLength(500, 500);
console.log("After setters: ", backpack);
