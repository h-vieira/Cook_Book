
function handleRecept(id, all){
  document.getElementById("carouselExampleCaptions").style.visibility = "hidden"; 
  document.getElementById("carouselExampleCaptions").style.display ="none";
  let dish = all[id - 1];
  console.log(dish);

  let recept =`
<h3>
${dish.title}
    <small class="text-muted">${dish.desc}</small>
  </h3>
  <div>
    <div class="card">
      <img src="img/${dish.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">
        <h2>${dish.pic_desc}</h2>
        </p>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col ingre">
          <h4>Ingredients</h4>
          <ul class="list-group">
            `
            dish.ingredients.map( i => {
              console.log(`<li class="list-group-item">${i}</li>`)
              recept += `<li class="list-group-item">${i}</li>`;
            });

              recept +=
`
          </ul>
        </div>

        <div class="col descr">
          <h4>Cooking description</h4>
          <p>
          ${dish.instruction}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col dishup">
          <h4 align="center">Dish Up</h4>
          <p>Tiramisu jelly beans bear claw brownie I love. I love croissant sesame snaps jelly. Jelly croissant chocolate ice cream I love donut.
            Ice cream jujubes liquorice. Icing caramels brownie liquorice carrot cake chupa chups tootsie roll I love. Pastry pastry chocolate cake.
            <br><br>
            Wafer bear claw oat cake I love ice cream. Soufflé pie I love chocolate marshmallow lollipop liquorice.
            Gingerbread jelly sugar plum. Cotton candy gingerbread caramels. Gummies I love soufflé chupa chups dragée.
            Bear claw croissant pie dragée cookie I love ice cream cupcake. I love candy canes dessert.
            Marzipan cupcake cupcake I love caramels I love sweet tiramisu donut. Donut toffee bonbon.
            Tart carrot cake dragée sesame snaps soufflé I love chocolate cake sweet.
            <br><br>
            Sweet roll pudding gingerbread dragée bonbon tootsie roll jelly-o caramels. Jelly-o donut toffee tiramisu I love sweet chocolate bar I love. Chupa chups chupa chups lemon drops muffin. Chocolate bar cotton candy wafer I love. I love
            gingerbread jelly beans. I love marshmallow liquorice cheesecake. Toffee candy brownie cookie danish croissant jelly. Cake cookie lemon drops candy gingerbread croissant liquorice. Sweet roll jelly beans bonbon chocolate cake I love
            pastry chupa chups topping muffin. I love soufflé gummi bears fruitcake caramels.
          </p>
        </div>
      </div>

    </div>








`




;
document.querySelector("#test").innerHTML = recept;
}
function progressJSON(data){
  const all = data;
   data.map( d => {
    console.log(d.title);
    document.querySelector("#test").innerHTML +=


   `<div class="card flex-grow-1" id="${d.id}" style="width: 18rem;" bg-dark text-white">
        <img class="card-img" src="img/${d.img}" alt="img/${d.title}.jpg">
        <div class="card-img-overlay d-flex flex-column">
            
            <h2 class=" card-title text-white p-x-5" style=" font-weight:700; background-color: rgba(87, 87, 87, 0.493);"><span class="mr-auto">${d.title}</span></h2>
            <div class="mt-auto "><h2><p class="card-text " style="  font-weight:600; background-color: rgba(255, 255, 255, 0.6)">${d.desc}</p></h2></div>
            <div class="row ">
              <div class="col"> <a href="${d.id}" class="btn btn-primary link"> Find the recept</a>  
              <button class="my-1 btn btn-secondary" type="submit" onclick="share('${d.source}')">Share</button>
              </div>
             
            </div>
        </div>
    </div>`



    
  /*  `<div class="card flex-grow-1" id="${d.id}" style="width: 18rem;">
      <img src="img/${d.img}" class="card-img-top" alt="img/tiramisu.jpg">
      <div class="card-body">
        <h5 class="card-title"> ${d.title} </h5>
        <p class="card-text">${d.desc}</p>
        <a href="${d.id}" class="btn btn-primary link"> Find the recept</a>
        <button onclick="share('${d.source}')">Share</button>
      </div>
    </div>` */

    ;
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

  const share = (link = "reference link missing") => alert(link);




