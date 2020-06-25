// async function displayRatings() {
//     let ratingElement = document.getElementById('RATING TEXT ID');
//     let recipeId = parseInt(window.location.toString().split('/')[
//         window.location.toString().split('/').length - 1
//     ])
//     const response = await fetch(`/ratings/recipe/` + recipeId)

//     if (response.ok) {
//         let ratingSum;
//         response.forEach(element => {
//             ratingSum += element.rating;
//         })
//         let ratingAvg = ratingSum/response.length;
//         ratingElement.innerHTML = Math.round(ratingAvg * 10) / 10;
//     } else {
//         alert(response.statusText)
//     }
// }

// window.onload(displayRatings)




async function ratingFormHandler(event) {
    event.preventDefault();
  
    const rating = document.querySelector('input[name="rating-body"]').value.trim();
  
    const recipe_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    // if there is a rating -- preventing from users submitting empty ratings 
    if (rating) {
        const response = await fetch('/api/ratings', {
          method: 'POST',
          body: JSON.stringify({
            recipe_id,
            rating
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.reload();
          
        } else {
          alert(response.statusText);
          document.querySelector('#rating-form').style.display = "block";
        }
      }
  }
  
  document.querySelector('#rating-form').addEventListener('submit', ratingFormHandler);