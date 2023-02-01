/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

import Article from "./Article.js";

// Instantiate an array of articles
const arr = [
  new Article(
    "Lorem Ipsum 1",
    "John Doe",
    "This is some conent of the article."
  ),
  new Article(
    "Lorem Ipsum 2",
    "Jane Doe",
    "This is some conent of the article."
  ),
  new Article(
    "Lorem Ipsum 3",
    "Juan Dela Cruz",
    "This is some conent of the article."
  ),
];

// Simple function declaration
const displayArticles = function (articles) {
  const main = document.querySelector("main");
  // Usage of arrow function as a callback
  articles.forEach((article) => {
    // Create an h2 containing the article's title
    const title = document.createElement("h2");
    title.innerHTML = article.title;

    // Create an h3 containing the article's author
    const author = document.createElement("h3");
    author.innerHTML = article.author;

    // Create a p containing the article's content
    const content = document.createElement("p");
    content.innerHTML = article.content;

    // Create an article element and add the title, author and content elements
    const new_article = document.createElement("article");
    new_article.append(title);
    new_article.append(author);
    new_article.append(content);

    // Add the new article to the main element
    main.append(new_article);
  });
};

function main() {
  displayArticles(arr);
}

main();
