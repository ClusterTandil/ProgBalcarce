export class Libro {
    private titulo: string;
    private autor: string;
    private año: number;
    private cantDePag: number;
    private deleted: boolean;
    private ISBN: string;

    public constructor (ISBN: string, titulo: string, autor: string, año: number, cantDePag: number) {
        this.autor = autor;
        this.año = año;
        this.titulo = titulo;
        this.cantDePag = cantDePag;
        this.ISBN = ISBN
        this.deleted = false;
    }

}
