## Propuesta 3: CatGallery con The Cat API
api: https://thecatapi.com/

Objetivo del Ejercicio
● Practicar peticiones a una API REST usando fetch (o tu biblioteca preferida, como Axios).
● Manejar y presentar datos dinámicamente en el DOM.
● Implementar funcionalidades de guardado en localStorage (por ejemplo, para “favoritos”).
● Manejar paginación o carga de más resultados.
● Mejorar la experiencia de usuario con funciones de filtrado y/o clasificación, si lo deseas.


# Descripción General

1 Página Principal

● Debe mostrar un contenedor con varias imágenes de gatos obtenidas de The Cat API.

● Cada imagen debe tener un botón o ícono para marcarla como “favorita”.

2 Favoritos

● Cuando el usuario marca una imagen como favorita, la información correspondiente (por
ejemplo, la URL de la imagen o un ID) se guarda en localStorage.

● En la parte superior (o en una sección aparte), muestra o permite al usuario acceder a la galería
de favoritos.

● El usuario debe poder eliminar de favoritos las imágenes que ya no desee, actualizando así el
localStorage.

3 Paginación o “Ver más”

● Puedes mostrar inicialmente 9 (o la cantidad que desees) imágenes de gatos.

● Incluye un botón “Ver más” que cargue otras 9 imágenes siguientes desde la API y las añada a la
galería.

● Alternativamente, puedes implementar un scroll infinito: cuando el usuario llegue al final de la
página, se cargan más imágenes automáticamente.

4 Manejo de Errores y Estados

● Muestra un estado de carga (un texto o spinner) mientras la petición a la API se realiza.

● Si ocurre un error (por ejemplo, conexión fallida), notifícalo al usuario con un mensaje claro

5 (Opcional) Filtrado o Búsqueda Avanzada

● The Cat API soporta parámetros de filtrado por raza, tipo de imagen (jpg, png, gif), etc.

● Agrega un formulario con selectores para razas, o checkboxes para el tipo de archivo, para refinar
la búsqueda.

6 (Opcional) Información Extra

● Cada imagen de gato a veces contiene metadatos sobre la raza o su historia. Muestra datos como
“breed name”, “temperament”, “origin” en un modal emergente o en un recuadro aparte.