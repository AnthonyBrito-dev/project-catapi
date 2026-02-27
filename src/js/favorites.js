//Seleccionamos al que le agregaremos las imagenes guardadas 
let sectionImgFavorites = document.getElementById("save-cats")

/*La funcion colocarImgs se encarga de colocar las imagenes en
el section asignado*/
let colocarImgs = ()=> {
    const total = localStorage.length;
    
    /*Iteramos por el localStorage para agregar las etiquetas de 
    imagenes al section*/
    for (let i = 0; i < total; i++) {
		const clave = localStorage.key(i);
		let imgFavorite = document.createElement("img")
		imgFavorite.src = localStorage.getItem(`${clave}`)
		sectionImgFavorites.appendChild(imgFavorite)

		//Con doble click eliminamos la imagen de favoritos
		imgFavorite.addEventListener("dblclick", ()=>{
			localStorage.removeItem(clave)
			sectionImgFavorites.removeChild(imgFavorite)
		})
    }
    
}

colocarImgs()

//Añadimos un scroll hacia arriba 
let buttonTop = document.getElementById("top");
buttonTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});