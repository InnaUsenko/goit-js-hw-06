const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const mainElement = document.querySelector("#ingredients");
const childrens = [];
ingredients.forEach(elem => {
  const curItem = document.createElement("li");
  curItem.textContent = elem;
  childrens.push(curItem);
});
mainElement.append(...childrens);