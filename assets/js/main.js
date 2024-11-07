 async function getRecipes(){
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const data = await response.json();
    const recipes = data.recipes;
    const count = data.count;
    document.querySelector(".count").textContent+=count;

    const result = recipes.map(function(r){
       return `
       <div class='recipe'>
       <img src='${r.image_url}'/>
       <h2>${r.title}</h2>
       </div>
       `;
    }).join('');

document.querySelector(".recipes .row").innerHTML=result;

}
getRecipes();