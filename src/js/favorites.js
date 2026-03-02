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
        console.log(localStorage.getItem(`${clave}`))

		//Con doble click eliminamos la imagen de favoritos
		imgFavorite.addEventListener("dblclick", ()=>{
			localStorage.removeItem(clave)
			sectionImgFavorites.removeChild(imgFavorite)

            //Seleccionamos el contenedor 
            let containerFavs = document.getElementById("container-favs")

            //Creamos un parrafo para mostrar que se ha guardado y le damos estilo 
            let p = document.createElement("p")
            p.textContent = "Eliminado exitosamente"
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

            //Agregamos el parrafo y se elimina despues de 2 seg
            containerFavs.appendChild(p)
            let tiempo = setInterval(()=>{
                p.remove()
            }, 2000)
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