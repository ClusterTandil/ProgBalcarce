 import { Auto2 } from "./auto";
 import { Motor2 } from "./motor";

 let motor16 = new Motor2(16);
 let motor14 = new Motor2(14);
 let motor10 = new Motor2(10);
 
 let primerAuto: Auto2 = new Auto2(motor16,'Ford', 'Fiesta',2022);
 let segundoAuto: Auto2 = new Auto2(motor14,'Renault', 'Clio',2000);
 let tercerAuto: Auto2 = new Auto2(motor10,'Peugeot', '307');
 let randomalgo: number = 12;
 let arrAutos: Auto2[] = [primerAuto, segundoAuto, tercerAuto];

arrAutos.forEach(auto => {
    console.log(auto.getMarca());
    console.log(auto.devolverthis());
    console.log(auto.getMotor());
    console.log(auto.getMotor().getLitros());
    }
);