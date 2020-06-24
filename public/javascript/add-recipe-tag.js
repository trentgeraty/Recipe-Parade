
// async function newRecipeTag(event) {
//     event.preventDefault();
    
//     const recipeTags = document.querySelector('input[name="recipe-tag"]').value.trim();
  
//     const id = window.location.toString().split('/')[
//       window.location.toString().split('/').length - 1
//     ];
  
//     console.log(recipeTags);
  
//     const recipeTagUpdateResponse = await fetch(`/api/tags`, {
//         method: 'POST',
//         body: JSON.stringify({
//           recipeTags,
//           id
  
//         }),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//     });
  
//       if (recipeTagUpdateResponse.ok) {
//         document.location.replace('/dashboard');
//       } else {
//         alert(recipeTagUpdateResponse.statusText);
//       }
  
//   }

//   document.querySelector('#addrecipe-tags-form').addEventListener('submit', newRecipeTag);

  async function tagFormHandler(event) {
    event.preventDefault();
  
    const tag_name = document.querySelector('input[name="tag-body"]').value.trim();
  
    const recipe_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    // if there is a comment -- preventing from users submitting empty comments 
    if (tag_name) {
        const response = await fetch('/api/tags', {
          method: 'POST',
          body: JSON.stringify({
            recipe_id,
            tag_name
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.reload();
          
        } else {
          alert(response.statusText);
          document.querySelector('#tag-form').style.display = "block";
        }
      }
  }
  
  document.querySelector('#addrecipe-tags-form').addEventListener('submit', tagFormHandler);