// const recipeTagUpdateResponse = await fetch(`/api/tags`, {
//   method: 'POST',
//   body: JSON.stringify({
//     recipeTags,
//     id

//   }),
//   headers: {
//     'Content-Type': 'application/json'
//   }
// });

// if (response.ok) {
//   document.location.replace('/dashboard');
// } else {
//   alert(response.statusText);
// }

async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="title"]').value.trim();
    const ingredients = document.querySelector('input[name="ingredients"]').value.trim();
    const directions = document.querySelector('input[name="directions"]').value.trim();
    const recipeTags = document.querySelector('input[name="recipe-tag"]').value.trim();

    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    console.log(title);
    console.log(ingredients);
    console.log(directions);
    console.log(recipeTags);
    console.log(id);
  
    const response = await fetch(`/api/recipes`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        ingredients,
        directions
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