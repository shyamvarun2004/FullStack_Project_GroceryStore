let searchForm=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active');
    Menu.classList.remove('active');
    ShoppingCart.classList.remove('active');
    Login.classList.remove('active');
}

const APP_ID = '54691455';
const APP_KEY = '53acacc371mshce703ec800d0092p150489jsn3401947dc5e4';



searchForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const query = searchBox.value.trim();

  if (query !== '') {
    const apiUrl = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        displayRecipes(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
});

function displayRecipes(data) {
  // Get a reference to the element where you want to display the recipes
  const recipesContainer = document.getElementById('recipes-container');

  // Clear any previous results
  recipesContainer.innerHTML = '';

  // Iterate through the 'hits' array in the data to access individual recipes
  data.hits.forEach(hit => {
    const recipe = hit.recipe;

    // Create a container for each recipe
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');

    // Create an element for the recipe title
    const recipeTitle = document.createElement('h2');
    recipeTitle.textContent = recipe.label;

    // Create a list for the recipe ingredients
    const ingredientList = document.createElement('ul');
    recipe.ingredientLines.forEach(ingredient => {
      const listItem = document.createElement('li');
      listItem.textContent = ingredient;
      ingredientList.appendChild(listItem);
    });

    // Append the title and ingredient list to the recipe card
    recipeCard.appendChild(recipeTitle);
    recipeCard.appendChild(ingredientList);

    // Append the recipe card to the recipes container
    recipesContainer.appendChild(recipeCard);
  });
}

