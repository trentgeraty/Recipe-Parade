async function displayRatings() {
    let ratingElement = document.getElementById('RATING TEXT ID');
    let recipeId = parseInt(window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ])
    const response = await fetch(`/ratings/recipe/` + recipeId)

    if (response.ok) {
        let ratingSum;
        response.forEach(element => {
            ratingSum += element.rating;
        })
        let ratingAvg = ratingSum/response.length;
        ratingElement.innerHTML = Math.round(ratingAvg * 10) / 10;
    } else {
        alert(response.statusText)
    }
}

window.onload(displayRatings)

async function submitRating() {
    const ratingValue = document.getElementById('RATING FROM ELEMENT ID').value
    const recipeId = parseInt(window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ]);
    
    const response = fetch('/api/ratings', {
        method: 'POST',
        body: JSON.stringify({
            recipe_id: recipeId,
            rating: ratingValue
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        displayRatings();
    } else {
        alert(response.statusText)
    }

}

document.getElementById('SUBMIT RATING BUTTON ID').addEventListener('click', submitRating)