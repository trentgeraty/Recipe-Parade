async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="edit-title"]').value.trim();
  const ingredients = document.querySelector('input[name="edit-ingredients"]').value.trim();
  const directions = document.querySelector('input[name="edit-directions"]').value.trim();
  console.log(title);
  console.log(ingredients);
  console.log(directions);

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
    
    const response = await fetch(`/api/recipes/${id}`, {
      method: 'PUT',
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
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }

}

document.querySelector('.edit-recipe-form').addEventListener('submit', editFormHandler);