async function removeFavoriteHandler(event) {
    event.preventDefault();
  
    const recipe_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    console.log(recipe_id)
  
    // if there is a comment -- preventing from users submitting empty comments 
    if (recipe_id) {
        const response = await fetch('/savedrecipes', {
            method: 'POST',
            body: JSON.stringify({
              recipe_id,
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          });
        
          if (response.ok) {
              document.location.replace('/savedrecipes');
            } else {
              alert(response.statusText);
          }

    }


    // const id = window.location.toString().split('/')[
    //     window.location.toString().split('/').length - 1
    //   ];
      
    //   const response = await fetch(`/api/savedrecipes/${id}`, {
    //     method: 'DELETE',
    //     body: JSON.stringify({
    //       recipe_id: id
    //     }),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   });
      
    //   if (response.ok) {
    //     document.location.replace('/dashboard/');
    //   } else {
    //     alert(response.statusText);
    //   }

}
  
  document.querySelector('#remove-favorite-btn').addEventListener('submit', removeFavoriteHandler);

