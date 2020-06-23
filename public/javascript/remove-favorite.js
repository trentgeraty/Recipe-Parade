// async function removeFavoriteHandler(event) {
//     event.preventDefault();
  
//     // const comment_text = document.querySelector('input[name="comment-body"]').value.trim();
  
//     const recipe_id = window.location.toString().split('/')[
//       window.location.toString().split('/').length - 1
//     ];
  
//     // if there is a comment -- preventing from users submitting empty comments 
//     if (recipe_id) {
//         const response = await fetch('/savedrecipes', {
//           method: 'POST',
//           body: JSON.stringify({
//             recipe_id,
//           }),
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         });
      
//         if (response.ok) {
//             document.location.replace('/savedrecipes');
//           } else {
//             alert(response.statusText);
//         }
//     }
//   }
  
//   document.querySelector('.comment-form').addEventListener('submit', removeFavoriteHandler);