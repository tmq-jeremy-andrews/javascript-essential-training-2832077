/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

document.querySelectorAll(".backpack__name").forEach((title) => {
  title.innerHTML = "All your titles were replaced.";
  title.style.color = "red";
});

const mainTitle = document.querySelector(".siteheader .site-title");
mainTitle.innerHTML = "This main title has been selected and replaced!";
mainTitle.style.background = "#1c1c1c";
mainTitle.style.color = "#f7f7f7";

const mainContent = document.querySelector(".maincontent");
const articles = mainContent.querySelectorAll("article");
articles.forEach((article) => {
  const lastChild = article.querySelector("li:last-child");
  console.log(lastChild);
  lastChild.querySelector("span").innerHTML = "Not sure";
});
