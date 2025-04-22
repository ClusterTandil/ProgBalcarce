"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auto_1 = require("./auto");
var motor_1 = require("./motor");
var motor16 = new motor_1.Motor2(16);
var motor14 = new motor_1.Motor2(14);
var motor10 = new motor_1.Motor2(10);
var primerAuto = new auto_1.Auto2(motor16, 'Ford', 'Fiesta', 2022);
var segundoAuto = new auto_1.Auto2(motor14, 'Renault', 'Clio', 2000);
var tercerAuto = new auto_1.Auto2(motor10, 'Peugeot', '307');
var randomalgo = 12;
var arrAutos = [primerAuto, segundoAuto, tercerAuto];
arrAutos.forEach(function (auto) {
    console.log(auto.getMarca());
    console.log(auto.devolverthis());
    console.log(auto.getMotor());
    console.log(auto.getMotor().getLitros());
});
