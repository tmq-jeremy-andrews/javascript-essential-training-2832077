import Book from "./Book.js";

const book1 = new Book("1984", "George Orwell", 1949);
const book2 = new Book("Animal Farm", "George Orwell", 1945);
const book3 = new Book("The Art of Racing in the Rain", "Garth Stein", 2008);
const book4 = new Book("Moby Dick", "Herman Melville", 1851);
const book5 = new Book(
  "Digital Minimalism: Choosing a Focused Life in a Noisy World",
  "Cal Newport",
  2019
);

const books = [book1, book2, book3, book4, book5];

document.body.innerHTML = "<ul>";
for (const book of books) {
  document.body.innerHTML += `<li><b>${book.title}</b> by ${book.author}, ${
    book.year
  } (${book.getAgeInYears()} years old).</li>`;
}
document.body.innerHTML += "</ul>";
