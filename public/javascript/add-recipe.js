async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="title"]').value.trim();
    const ingredients = document.querySelector('input[name="ingredients"]').value.trim();
    const directions = document.querySelector('input[name="directions"]').value.trim();
    console.log(title);
    console.log(ingredients);
    console.log(directions);
  
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