const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainer = document.querySelector('ul');

const elements = options => {
  return options.map(ingredient => {

  const ingredientsList = document.createElement('li');
ingredientsList.classList.add('item');
  ingredientsList.textContent = ingredient;
 
  return ingredientsList;
  
});
};

ingredientsContainer.append(...elements(ingredients));

console.log(elements(ingredients));


