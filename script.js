let count = 1;
let input = document.querySelector("input");
let btn = document.querySelector(".search");
let showMore = document.querySelector(".show");

let main = document.querySelector("main");

async function img(params) {
  let promise = await fetch(
    `https://api.unsplash.com/search/photos?page=${count}&query=${input.value.toLowerCase()}&client_id=jN6ghQlvnd8rB_r_8SCrCfvyYJVxjBhkTtmziI4JVfw`
  );

  return promise.json();
}



btn.addEventListener("click", () => {
  if (input.value == ""){
    alert("Enter the image U want !!");
    return;
  }

  if (main.childNodes.length > 1){
    let mainImg = main.querySelectorAll("div");
      // console.log(mainImg)
    mainImg.forEach((value) =>{

    value.remove();
    })
    
    }

 
  img()
    .then((data) => {
      fetchData(data.results);
    })
    .catch((error) => {
      console.log(error);
    });
});

function fetchData(arr) {


  arr.forEach((element) => {
    updateOnUI(element);
  });

  let div = document.createElement("div");
  div.classList.add("show-more-box");
  let showMore = document.createElement("button");
  showMore.classList.add("search");
  showMore.id = "show-more";
  showMore.innerText = "Show More";
  div.appendChild(showMore);
  main.appendChild(div);

  showMore.addEventListener("click", () => {
    div.style.display = "none";
    count++;
    img()
      .then((data) => {
        fetchData(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  });

}

function updateOnUI(value) {


  // console.log(value);
  let div = document.createElement("div");
  div.classList.add("img-box");
  div.innerHTML = `
    <img src="${value.urls.full}">
            <div class="img-des">
                <p>${value.alt_description}</p>
            </div>
  `;

  div.addEventListener("click" , () =>{
    let popUp = document.createElement("div");
    popUp.classList.add("popup");
    popUp.innerHTML = `
     <div class="popup-item">
        <div class="popup-img">
            <img src="${value.urls.full}">
        </div>
        <div class="popup-des">
            <p>${value.alt_description}</p>
        </div>
        <button class="clear">X</button>
    </div>
    `

    

    main.appendChild(popUp);

    let clear = document.querySelectorAll(".clear");
clear.forEach((value) =>{
  value.addEventListener("click" , ()=>{
    console.log("hi")
    popUp.style.visibility = "hidden";
  })
})


  })
  main.appendChild(div);


}



