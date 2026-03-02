import '../css/style.css'

//Seleccionamos el section al que se le pasan las imagenes random
let sectionImgs = document.getElementById("image-cats")

//Guardamos la clave api junto con la url de las imagenes random
const url = 'https://api.thecatapi.com/v1/images/search?limit=8';
const urlBreeds = "https://api.thecatapi.com/v1/breeds"
const apiKey = "live_MsxjduVoc1Sbf8OrksE0P0deyGiiSZcLAw0mYAa02Y3DsUy7zF2KnlL9qvcX99ps"

//Pedimos las imgs al servidor
let verMas = async (breed="")=> {fetch( `https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=${breed}&api_key=${apiKey}`, 
	{headers: {
      	'x-api-key': apiKey
    }})
.then((response) => {
	if (response.status == "pending") {
		console.log("cargando")
	} else {
		return response.json();
	}
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
		let container = document.getElementById("container")
		let p = document.createElement("p")
		p.textContent = "Guardado exitosamente"
		p.style.alignSelf = "center"
		p.style.alignContent = "center"
		p.style.position = "absolute"
		p.style.boxShadow = "none"
		p.style.color = "black"
		p.style.backgroundColor = "rgb(183, 232, 208)"
		p.style.paddingTop = "10px"
		p.style.paddingBottom = "10px"
		p.style.paddingLeft = "20px"
		p.style.paddingRight = "20px"
		p.style.maxWidth = "mincontent"
		p.style.borderRadius = "5px"
		container.appendChild(p)
		let tiempo = setInterval(()=>{
			p.remove()
		}, 2000)
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

//Añadimos un scroll hacia arriba 
let buttonTop = document.getElementById("top-main");
buttonTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

let select = document.getElementById("raza")
let selectFiltro = async () => {
	let buscar = fetch(urlBreeds, {headers: {
		'x-api-key': apiKey
	}})

	let buscarRazas = await buscar
	let buscarRazasJson = await buscarRazas.json()
	
	buscarRazasJson.map((raza)=>{
		let option = document.createElement("option")
		option.textContent = raza.name
		option.setAttribute("value", raza.id)
		select.appendChild(option)
	})

}
selectFiltro()

//Añadimos evento para cambiar la variable a la raza especificada
let selectRaza = ""

select.addEventListener("click", ()=>{
	selectRaza = select.value
})

//añadimos imagenes selccionadas al container por raza
let buttonfiltrar = document.getElementById("filtrar")
buttonfiltrar.addEventListener("click", ()=>{
	let specificBreed = async () => {
		/*let buscarImg = fetch(`https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=${selectRaza}&api_key=${apiKey}`, {headers: {
			'x-api-key': apiKey
		}})

		let buscarImagenesRaza = await buscarImg
		let buscarImgRazaJson = await buscarImagenesRaza.json()*/
		sectionImgs.innerHTML = ""
		verMas(selectRaza)
	}

	specificBreed()
})