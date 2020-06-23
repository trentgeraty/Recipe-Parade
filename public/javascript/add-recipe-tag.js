
async function newRecipeTag(event) {
    event.preventDefault();
    
    const recipeTags = document.querySelector('input[name="recipe-tag"]').value.trim();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    console.log(recipeTags);
  
    const recipeTagUpdateResponse = await fetch(`/api/tags`, {
        method: 'POST',
        body: JSON.stringify({
          recipeTags,
          id
  
        }),
        headers: {
          'Content-Type': 'application/json'
        }
    });
  
      if (recipeTagUpdateResponse.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(recipeTagUpdateResponse.statusText);
      }
  
  }

  document.querySelector('#addrecipe-tags-form').addEventListener('submit', newRecipeTag);