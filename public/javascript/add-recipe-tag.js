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
  
  document.querySelector('.edit-recipe-form').addEventListener('submit', tagFormHandler);