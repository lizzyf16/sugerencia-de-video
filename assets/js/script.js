import Reproductor from "./class/reproductor.js";


let objMusica = new Reproductor ("https://www.youtube.com/embed/aVb6tLeONo8?si=I2k02LzB1l3f6_88", "musica")
let objPelicula = new Reproductor ("https://www.youtube.com/embed/aVb6tLeONo8?si=I2k02LzB1l3f6_88", "peliculas")

let objSerie = new Reproductor ("https://www.youtube.com/embed/aVb6tLeONo8?si=I2k02LzB1l3f6_88", "series")

objMusica.setInicio(50)
objMusica.playMultimedia();

objPelicula.setInicio(80)
objPelicula.playMultimedia();

objSerie.setInicio(100)
objSerie.playMultimedia();
