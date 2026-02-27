import '../css/style.css'

//Seleccionamos el section al que se le pasan las imagenes random
let sectionImgs = document.getElementById("image-cats")

//Guardamos la clave api junto con la url de las imagenes random
const url = 'https://api.thecatapi.com/v1/images/search?limit=8';
const apiKey = "live_MsxjduVoc1Sbf8OrksE0P0deyGiiSZcLAw0mYAa02Y3DsUy7zF2KnlL9qvcX99ps"

//Pedimos las imgs al servidor
let verMas = async ()=> {fetch( url, 
	{headers: {
      	'x-api-key': apiKey
    }})
.then((response) => {
   	return response.json();
 })
.then((data) => {   //Con los datos que pasa la respuesta iteramos por cada imagen
  	let imagesData = data;
  	imagesData.map((imageData) => {
    
	//Creamos las imagenes y las guardamos dentro del section asignado
    let image = document.createElement('img');
    image.src = `${imageData.url}`;
	image.id = `${imageData.id}`
    sectionImgs.appendChild(image);

	/*Añadimos funcionalidad al hacer click en c/u para agregarla al localStorage con
	su id y url*/ 
	image.addEventListener("click", ()=>{
		localStorage.setItem(`img ${imageData.id}`, imageData.url)
	})	
    });
}) //Si ocurre algun error lo añadimos a la consola POR AHORA
.catch(function(error) {
   console.log(error);
})};

//Llamamos a la funcion para que inicialmente se muestren las imagenes
verMas();

/*Añadimos funcionalidad al boton ver mas para que al hacer click en él, se vuelva
a ejecutar la funcion ver mas*/
let buttonSee = document.getElementById("see-more")
buttonSee.addEventListener("click", ()=>{
  	verMas()
})