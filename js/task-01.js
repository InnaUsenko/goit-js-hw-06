const parentElem = document.querySelector("#categories");
const numbOfCat = parentElem.childElementCount;

console.log("Number of categories: " + numbOfCat);

const myChildren = parentElem.querySelectorAll(".item");
myChildren.forEach((elem) => {
    console.log("Category: " + elem.firstElementChild.textContent);
    console.log("Elements: " + elem.lastElementChild.childElementCount);
});

