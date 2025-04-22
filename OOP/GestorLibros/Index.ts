import { GestorLibros } from "./GestorLibros";
import { Libro } from "./Libro";

let libro1: Libro = new Libro ("AA123", "a", "autor1", 1999,566);
let libro2: Libro = new Libro ("AB123", "b", "autor2", 1999,566);
let libro3: Libro = new Libro ("AC123", "c", "autor3", 1999,566);

//let arraylibros: Libro[] = [libro1,libro2,libro3];

let gestorLibros: GestorLibros = new GestorLibros([libro1,libro2,libro3]);

gestorLibros.consultaLibro()
gestorLibros.eliminarLibro()
gestorLibros.insertLibro()
gestorLibros.modificarLibro()