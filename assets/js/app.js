function handleRecept(id, all){
  document.getElementById("carouselExampleCaptions").style.visibility = "hidden"; 
  document.getElementById("carouselExampleCaptions").style.display ="none";
  let dish = all[id - 1];
  console.log(dish);

  let recept =
  ` <h3>
  ${dish.title}
  <small class="text-muted">${dish.desc}</small>
</h3>
  <div>
    <div class="card">
      <img src="img/${dish.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">${dish.pic_desc}</p>
      </div>
    </div>
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Ingredients
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <ul class="list-group">
            `
            dish.ingredients.map( i => {
              console.log(`<li class="list-group-item">${i}</li>`)
              recept += `<li class="list-group-item">${i}</li>`;
            });

              recept +=`
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Cooking instructions
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div class="accordion-body">
          ${dish.instruction}
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            DishUp
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div class="accordion-body">
          ${dish.dish_up}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
document.querySelector("#test").innerHTML = recept;
}
function progressJSON(data){
  const all = data;
   data.map( d => {
    console.log(d.title);
    document.querySelector("#test").innerHTML +=
    `<div class="card flex-grow-1" id="${d.id}" style="width: 18rem;">
    <img src="img/${d.img}" class="card-img-top" alt="img/tiramisu.jpg">
    <div class="card-body">
      <h5 class="card-title"> ${d.title} </h5>
      <p class="card-text">${d.desc}</p>
      <a href="${d.id}" class="btn btn-primary link"> Find the recept</a>
    </div>
    </div>`;
   });

   var elements = document.getElementsByClassName('link');

   for( let i = 0; i < elements.length; i++){
     let id = elements[i].getAttribute("href");
     console.log(id);
    elements[i].addEventListener("click", (e) => {
      e.preventDefault();
      console.log(id);
      console.log(all);
      handleRecept(id, all);
    });
   };
  };


  fetch("eat.json")
  .then(response => response.json())
  .then(responseJSON => progressJSON(responseJSON));

