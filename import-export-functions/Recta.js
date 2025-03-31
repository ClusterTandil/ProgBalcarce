//Ejercicio Export-Import
import * as punto from "./Punto.js"

console.log(punto.inicio());
console.log(punto.final());

// Ejercicio Foreach, Filter y Map

//Traigo los usuarios desde el import (los seteo en punto.js)

punto.users.forEach(user => { console.log(user) });

punto.users.filter(user => {
    if (user.firstName === "Susan") {
        console.log("USER SUSAN DETECTED " + user.firstName + " " + user.lastName)
    }
});

let usersnew = punto.users.map(user => {
    return user.firstName + "-" + user.lastName
});

console.log(usersnew);
