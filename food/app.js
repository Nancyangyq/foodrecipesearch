let searchInput = document.querySelector('#search_input');
let searchBtn = document.querySelector('#search_btn');



searchBtn.addEventListener('click',()=>{
    let foodName = searchInput.value;
    let finalURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;

    // console.log(finalURL);
    if(foodName.length == 0){
        result.innerHTML = `<h3>The input field cannot be empty</h3>`;
    }
    else{
    fetch(finalURL+foodName)
    .then((response) => response.json())
    .then((data)=>{
        // console.log(data.meals[0]);
        // console.log(data.meals[0].strMeal);
        // console.log(data.meals[0].strArea);
        // console.log(data.meals[0].strMealThumb);
        // console.log(data.meals[0].strInstructions);
        // console.log(data.meals[0].strYoutube);
        // let result = document.querySelector('#result');
        result.innerHTML =`
        <div class="result">
        <h2>${data.meals[0].strMeal}</h2>
        <h4>Area:${data.meals[0].strArea}</h4>
        <img src="${data.meals[0].strMealThumb}" class="food-img">
        <div class="wrapper">
            <h3>Recipe:</h3>
            <p>${data.meals[0].strInstructions}</p>
        </div>
        <a href="${data.meals[0].strYoutube}" target="_blank">Watch Video!</a>
        </div>`;

    })
    .catch(()=>{

            result.innerHTML = `<h3>Please enter a valid food name.</h3>`;

    })
    }
    
})