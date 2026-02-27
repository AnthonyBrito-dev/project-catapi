import '../css/style.css'

//Seleccionamos el section
let sectionImgs = document.getElementById("image-cats")

const url = 'https://api.thecatapi.com/v1/images/search?limit=8';
const apiKey = "live_MsxjduVoc1Sbf8OrksE0P0deyGiiSZcLAw0mYAa02Y3DsUy7zF2KnlL9qvcX99ps"

 let verMas = async ()=> {fetch(url,{headers: {
      'x-api-key': apiKey
    }})
 .then((response) => {
   return response.json();
 })
.then((data) => {
  let imagesData = data;
  imagesData.map((imageData) => {
    
    let image = document.createElement('img');
    //use the url from the image object
    image.src = `${imageData.url}`;
    image.style.marginBottom = "20px"
        
    sectionImgs.appendChild(image);
    });
})
.catch(function(erro) {
   console.log(erro);
})};

verMas();

let buttonSee = document.getElementById("see-more")
buttonSee.addEventListener("click", ()=>{
  verMas()
})