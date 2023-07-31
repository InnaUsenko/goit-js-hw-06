const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const mainElement = document.querySelector("#ingredients");
ingredients.forEach(elem => {
  const curItem = document.createElement("li");
  curItem.textContent = elem;
  mainElement.append(curItem);
});