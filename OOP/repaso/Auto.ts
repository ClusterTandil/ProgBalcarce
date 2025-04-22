import { Motor2 } from "./motor";

export class Auto2 {
    private marca: string;
    private modelo: string;
    private velocidadActual: number;
    private motor: Motor2;
 
    public constructor(motor: Motor2, marca: string, modelo: string, año?: number) {
        this.validate()
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
        this.velocidadActual = 0;
    }

    private validate () {

    }

    private getMayusBrand(brand: String) {
        return brand.toUpperCase();
    }

    public getMotor(): Motor2 {
        return this.motor;
    }

    public getMarca (): string {
        return this.getMayusBrand(this.marca);
    }
 
    public acelerar(año?: number): void {
        if (año != undefined && año <= 2010) {
            this.aumentarVel(9);
        }
        this.aumentarVel(10);
    }

    private aumentarVel (aceleracion) {
        this.velocidadActual += aceleracion;
    }

    public devolverthis () {
        return this;
    }
 }
