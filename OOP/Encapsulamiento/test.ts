class Auto {
    private marca: string;
    private modelo: string;
    private velocidadActual: number;
    private motor: Motor;
 
    public constructor(motor: Motor, marca: string, modelo: string, año?: number) {
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

    public getMotor(): Motor {
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

 class Motor {
    private litros: number;

    public constructor (litros: number) {
        this.litros = litros;
    }

    public getLitros () {
        return this.litros;
    }
 }

 let motor16 = new Motor(16);
 let motor14 = new Motor(14);
 let motor10 = new Motor(10);
 
 let primerAuto: Auto = new Auto(motor16,'Ford', 'Fiesta',2022);
 let segundoAuto: Auto = new Auto(motor14,'Renault', 'Clio',2000);
 let tercerAuto: Auto = new Auto(motor10,'Peugeot', '307');
 let randomalgo: number = 12;
 let arrAutos: Auto[] = [primerAuto, segundoAuto, tercerAuto];

arrAutos.forEach(auto => {
    console.log(auto.getMarca());
    console.log(auto.devolverthis());
    console.log(auto.getMotor());
    console.log(auto.getMotor().getLitros());
    }
);


