async function removeFavoriteFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
      
      const response = await fetch(`/savedrecipes/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
        // recipe_id: id
        id: id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.replace('/savedrecipes/');
      } else {
        alert(response.statusText);
      }
      
}

document.querySelector('.remove-favorite-form').addEventListener('submit', removeFavoriteFormHandler);