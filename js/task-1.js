const list = document.getElementsByClassName("item");
//console.log(list);
console.log(`Number of categories: ${list.length}`);

const titles = document.querySelectorAll("h2");
console.log(titles);
titles.forEach(function (title) {
  const titleName = title.textContent;
  console.log(`Category: ${titleName}`);
  const categoriesNames = title.parentElement.querySelectorAll("ul>li");
  console.log(`Elements: ${categoriesNames.length}`);
});
