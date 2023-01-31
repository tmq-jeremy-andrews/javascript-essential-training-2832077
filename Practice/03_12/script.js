/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import { Backpack, Crate } from "./Backpack.js";

const bag = new Backpack("TheBag", 30, "Green", 10, 99, 99, true);

const box = new Crate("Oak", true, false);

box.stash(bag);
console.log("Let's see what's in the box: ", box.peek());
