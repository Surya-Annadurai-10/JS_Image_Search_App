
// let apiUrl = 'https://api.unsplash.com/search/photos '
// let apiKey = 'jN6ghQlvnd8rB_r_8SCrCfvyYJVxjBhkTtmziI4JVfw'


// async function image(params) {
//     let promise =await fetch(apiUrl, {
//         method : "GET",
//         headers : {
//             'X-Api-Key' : 'jN6ghQlvnd8rB_r_8SCrCfvyYJVxjBhkTtmziI4JVfw'
            
//         },
//         contentType : 'application/json'
//     });


//     return promise;    
// }



// image().then((res) =>{
//     return res.json();
// }).then((data) =>{
//     console.log(data);
// }).catch((error) =>{
//     console.log(error);
// });

let count = 1;
let input = document.querySelector("input")
let btn = document.querySelector(".search");
let showMore = document.querySelector(".show")

let main = document.querySelector("main");

      async function img(params) {
        let promise = await fetch(`https://api.unsplash.com/search/photos?page=${count}&query=${input.value.toLowerCase()}&client_id=jN6ghQlvnd8rB_r_8SCrCfvyYJVxjBhkTtmziI4JVfw`);

        return promise.json();
      }

showMore.addEventListener("click" ,()=>{
    count++;
    img().then((data) =>{
        console.log(data);

      }).catch((error) =>{
        console.log(error);
      });
 
})

btn.addEventListener("click" , ()=>{
    img().then((data) =>{
        console.log(data.results);
        fetchData(data);
      }).catch((error) =>{
        console.log(error);
      });
 
   
    // const apiKey = 'jN6ghQlvnd8rB_r_8SCrCfvyYJVxjBhkTtmziI4JVfw'; // Replace with your API key
    // const endpoint = 'https://api.unsplash.com/search/photos?query=dog?count=20';
    // const params = {
    //     client_id: apiKey,
    // };

    // fetch(endpoint, { method: 'GET', headers: { 'Authorization': `Client-ID ${apiKey}` }, params })
    //     .then(response => response.json())
    //     .then(data => {
    //        console.log(data.results[0].urls.full);
    //     })
    //     .catch(error => console.log('Error:', error));
})



function fetchData(arr){


arr.forEach((value) =>{
    console.log(value);
});


}

function updateOnUI(value){
  let div = document.createElement("div");
  div.classList.add("img-box");
  div.innerHTML = `
    <img src="${value.urls.full}">
            <div class="img-des">
                <p>${value.alt_description}</p>
            </div>
  `
main.appendChild(div);

}