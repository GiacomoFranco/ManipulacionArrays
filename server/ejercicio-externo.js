const posts = [
  { url: "https://www.eltiempo.com", category: "Colombia" },
  { url: "https://www.eltiempo.com", category: "Internacional" },
  { url: "https://www.eltiempo.com", category: "Latinoamérica" },
  { url: "https://www.eltiempo.com", category: "EEUU y Canadá" },
  { url: "https://www.eltiempo.com", category: "Asia" },
  { url: "https://www.portafolio.co", category: "Economía" },
  { url: "https://www.portafolio.co", category: "Negocios" },
  { url: "https://www.portafolio.co", category: "Internacional" },
  { url: "https://www.portafolio.co", category: "Innovación" },
  { url: "https://www.portafolio.co", category: "Tendencias" },
];


// const sameUrl = [];
// posts.forEach(post => {
//     if (!sameUrl.includes(post.url)) {
//         sameUrl.push(post.url)
//     }
// })

// const respuesta = [];

// sameUrl.forEach(url => {
//     let categories = [];

//     posts.forEach(post => {
//         if(post.url === url){
//             categories.push(post.category)
//         }
//     })
//     respuesta.push({
//         url: url,
//         categories: categories 
//     })
// })


// console.log(respuesta);

const sameUrl = [];

posts.forEach(post => {
    if(!sameUrl.includes(post.url)){
        sameUrl.push(post.url)
    }
})

const respuesta = [];

sameUrl.forEach(url => {
    let categories = [];
    posts.forEach(post => {
        if(post.url === url){
            categories.push(post.category)
        }
    })
    respuesta.push({
        url: url,
        categories: categories,
    })
})


console.log(respuesta);