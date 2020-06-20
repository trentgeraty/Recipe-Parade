async function newFormHandler(event) {
    event.preventDefault();
  
    const recipeTitle = document.querySelector('input[name="title"]').value.trim();
    const recipeIngredients = document.querySelector('input[name="ingredients"]').value.trim();
    const recipeDirections = document.querySelector('input[name="directions"]').value.trim();
    console.log(recipeTitle);
    console.log(recipeIngredients);
    console.log(recipeDirections)
  
    const response = await fetch(`/api/recipes`, {
      method: 'POST',
      body: JSON.stringify({
        recipeTitle,
        recipeIngredients,
        recipeDirections
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  };
  
document.querySelector('#new-recipe-form').addEventListener('submit', newFormHandler);