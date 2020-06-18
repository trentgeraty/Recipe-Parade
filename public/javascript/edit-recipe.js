async function editFormHandler(event) {
    event.preventDefault();

    const recipeTitle = document.querySelector('input[name="recipe-title"]').value.trim();
    const recipeIngredients = document.querySelector('input[name="recipe-ingredients"]').value.trim();
    const recipeDirections = document.querySelector('input[name="recipe-directions"]').value.trim();
    console.log(recipeTitle);
    console.log(recipeIngredients);
    console.log(recipeDirections)

    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
      
      const response = await fetch(`/api/recipes/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          recipe_id: id,
          recipeTitle,
          recipeIngredients,
          recipeDirections
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }

}

document.querySelector('.edit-recipe-form').addEventListener('submit', editFormHandler);