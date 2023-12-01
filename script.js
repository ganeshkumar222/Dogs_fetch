// const url="https://dog.ceo/api/breeds/list/all"
const container = document.getElementById("container1")
// const url = "https://restcountries.com/v3.1/all"
// const url = https://dog.ceo/api/breeds/list/all
const url = "https://dog.ceo/api/breed/hound/images"
let images = document.getElementById("carouselinner")

let result = fetch(url)
result.then((data)=>data.json()).then((res)=>{
    res.message.map((element)=>{
       images.innerHTML+=`<div class="carousel-item text-center">
       <img src=${element} class="rounded mx-auto d-block" alt="...">
     </div>`
    })

}).catch((error)=>console.log(error))