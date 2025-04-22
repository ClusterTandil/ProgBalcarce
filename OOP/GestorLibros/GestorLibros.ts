import { Libro } from "./Libro";

export class GestorLibros {
    private libros : Libro[];

    public constructor (libros: Libro[]) {
        this.libros = libros;
    }

    //crear metodos para: 
    //insertar
    public insertLibro (libro: Libro) {
        //hacer validacion que el libro ya no exista en el array libros
        this.libros.push(libro);
    }
    //consultar
    public consultaLibro(libro: Libro) {
        //hacer consulta
    }
    //modificar
    //Puede modificar cualquier caracteristica de un libro
    //que siga estando en el array
    public modificarLibro(libro: Libro) {
        //encontrar libro a traves del ISBN y modifcar cualquiera de los datos
    }
    //eliminar
    public eliminarLibro (libro: Libro) {
        //eliminar libro (propiedad deleted)
    }

}

