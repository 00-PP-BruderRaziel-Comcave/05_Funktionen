"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
// Funktionsdeklaration
// function test()
// {  
//     console.log("Hallo Tobias");
// }

/***** Funktionn 02a *******/
// 2a. Parametisierung + Datenübergabe von Innen

// ausgabeNamen();

function ausgabeNamen() {
    // What happens in VEGAS....
    let firstName = "Nico";
    console.log("Hallo " + firstName + "!");
}

// console.log(firstName);     //Fehler --> SCOPE!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// Argumente sind Daten für Parameter
ausgabeNamen2("Sohrab");
ausgabeNamen2("Nico");
ausgabeNamen2("Yasmeen");
ausgabeNamen2(prompt("Und dein Name ist...?"))

// Funktion mit Parameter(n)
function ausgabeNamen2(firstName) {     
    console.log("Hallo " + firstName + "!");
}

