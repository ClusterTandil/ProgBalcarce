"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto2 = void 0;
var Auto2 = /** @class */ (function () {
    function Auto2(motor, marca, modelo, año) {
        this.validate();
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
        this.velocidadActual = 0;
    }
    Auto2.prototype.validate = function () {
    };
    Auto2.prototype.getMayusBrand = function (brand) {
        return brand.toUpperCase();
    };
    Auto2.prototype.getMotor = function () {
        return this.motor;
    };
    Auto2.prototype.getMarca = function () {
        return this.getMayusBrand(this.marca);
    };
    Auto2.prototype.acelerar = function (año) {
        if (año != undefined && año <= 2010) {
            this.aumentarVel(9);
        }
        this.aumentarVel(10);
    };
    Auto2.prototype.aumentarVel = function (aceleracion) {
        this.velocidadActual += aceleracion;
    };
    Auto2.prototype.devolverthis = function () {
        return this;
    };
    return Auto2;
}());
exports.Auto2 = Auto2;
