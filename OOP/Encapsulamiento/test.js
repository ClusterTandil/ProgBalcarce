var Auto = /** @class */ (function () {
    function Auto(motor, marca, modelo, año) {
        this.validate();
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
        this.velocidadActual = 0;
    }
    Auto.prototype.validate = function () {
    };
    Auto.prototype.getMayusBrand = function (brand) {
        return brand.toUpperCase();
    };
    Auto.prototype.getMotor = function () {
        return this.motor;
    };
    Auto.prototype.getMarca = function () {
        return this.getMayusBrand(this.marca);
    };
    Auto.prototype.acelerar = function (año) {
        if (año != undefined && año <= 2010) {
            this.aumentarVel(9);
        }
        this.aumentarVel(10);
    };
    Auto.prototype.aumentarVel = function (aceleracion) {
        this.velocidadActual += aceleracion;
    };
    Auto.prototype.devolverthis = function () {
        return this;
    };
    return Auto;
}());
var Motor = /** @class */ (function () {
    function Motor(litros) {
        this.litros = litros;
    }
    Motor.prototype.getLitros = function () {
        return this.litros;
    };
    return Motor;
}());
var motor16 = new Motor(16);
var motor14 = new Motor(14);
var motor10 = new Motor(10);
var primerAuto = new Auto(motor16, 'Ford', 'Fiesta', 2022);
var segundoAuto = new Auto(motor14, 'Renault', 'Clio', 2000);
var tercerAuto = new Auto(motor10, 'Peugeot', '307');
var randomalgo = 12;
var arrAutos = [primerAuto, segundoAuto, tercerAuto];
arrAutos.forEach(function (auto) {
    console.log(auto.getMarca("a"));
    console.log(auto.devolverthis());
    console.log(auto.getMotor());
    console.log(auto.getMotor().getLitros());
});
