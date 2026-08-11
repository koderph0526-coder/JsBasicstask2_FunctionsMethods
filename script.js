/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/

// Skriv koden for oppgave 1 her

const isItOdd = (number) => number % 2 !== 0;
const isItEven = (number) => number % 2 === 0;
const num = Math.floor(Math.random() * 100);

function oddOrEven(number) {
  if (number % 2 !== 0) {
    return "Oddetall";
  } else {
    return "Partall";
  }
}
console.log(oddOrEven(246)); // Skal nå logges som "Partall"
console.log(oddOrEven(397)); //Skal nå logges som "Oddetall"
console.log(oddOrEven(num), num); // Siste eks som viser random tall i consoll loggen ved å laste inn siden på nytt

/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/

// Skriv koden for oppgave 2 her

const myString = (string) => {
  return `${string.toUpperCase()}! `;
};

console.log(
  myString(
    "Nå skal vi ha det gøyt og gjøre hele denne settningen om til svææære bokstaver",
  ),
);

/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/

// Skriv koden for oppgave 3 her
//Setter inn en tom let slik at jeg kan hente en tom string jeg kan sette navnet i ved consol.log
let name = "";

function greetings(name, oclock) {
  if (oclock <= 5 && oclock >= 0) {
    return `God natt ${name}`;
  } else if (oclock >= 6 && oclock <= 11) {
    return `God morgen ${name}`;
  } else if (oclock >= 12 && oclock <= 17) {
    return `God dag ${name}`;
  } else if (oclock >= 18 && oclock <= 23) {
    return `God kveld ${name}`;
  } else if (oclock <= 0) {
    return "Ugyldig tid";
  } else {
    return "Error: Ugyldig tid";
  }
}

console.log(greetings("Esther", 19));
//Kjenner jeg stusser på oppgave teksten her, da den ba oss lese nøye og samtidig ikke ber oss om å gjøre consoll log?
// Skulle jeg heller ha satt inn en call for funskjonen? Setter call under denne kommentaren, men lar consol.log stå for nå.
greetings();

/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/

// Skriv koden for oppgave 4 her
const myExample = ["Higgins", "Hobbins", "Bits", "Meets", "Bobbins"];

function reduceArr(arrayFix) {
  // return arrayFix.slice(1, -1);  --> Another way to get to the same result
  arrayFix.shift();
  arrayFix.pop();

  return arrayFix;
}
console.log(reduceArr(myExample));

/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/

// Skriv koden for oppgave 5 her
const firstExString = "  Javascript er vanskelig   ";
const anotherExString = " Det er vanskelig å bruke metoder ";
const lastExString = "   vanskelig        ";
const comboOfString = firstExString + anotherExString + lastExString; //Siden alle skulle ha samme endring kombinerer jeg strinegen i en egen const

function trimAndChange(array) {
  return array.trim().replaceAll("vanskelig", "gøy"); //trim() for å fjerne whitespace og replaceAll() for endre "vanskelig" til "gøy"
}
console.log(trimAndChange(comboOfString));

/******************************************************************************
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/
// Skriv koden for oppgave 6 her
items.shift(); //Step 1
items.splice(2, 1, "Linjal"); //Step 2
items.splice(0, 2, "Makeringspenn"); //Step 3
const alteredArr = items.join(" | "); //Step 4
console.log(alteredArr);
//
//Notat: Ja, jeg skal kunne gjøre alle stegene over i en const utifra hva jeg forstår, men når jeg forsøker så printer den kun "Viskelær", til consol...
const itemsTwo = [
  "Bok",
  "Penn",
  "Notatbok",
  "Viskelær",
  "Blyant",
  "Markør",
  "Passer",
  "Penal",
];
//La til to elementer i arrayet for å kunne sjekke at filter metoden fungerer på alle elementene.

/// Another attempt = Is now focused on the bonus task
itemsTwo.shift();
itemsTwo.splice(2, 1, "Linjal");
itemsTwo.splice(0, 2, "Markeingspenn").join(" | ");
const eItems = itemsTwo.filter((item) => item.includes("e")); //Vi har ikke gått gjennom .filter() i undervisning, men antar det handler om at vi skal bli flinkere på å google oss frem til løsninger

console.log(eItems);
//Beholder kommentarene/notat under for å kunne studere videre om det er en løsning som kunne fungert med denne typen tankegang også.
// .inludes("e");  --> tanke rundt hvordan, trenger å konvertere tilbake til array og se gjennom hvilke items i arrayet som innholder
//Joe's ex when asked:
// const newArrayItems = [];
// itemsTwo[0];
// if (itemsTwo.includes("e")) {
//   newArrayItems.push;
// }

/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/
const arrayDos = [];
// Skriv koden for oppgave 7 her
function dualParameter(arrEdit, stringEdit) {
  arrayDos.push("Blå");
}
console.log(dualParameter(["Rød", "Grønn"], "Blå"));

// Glem det... Trodde jeg hadde klart å finne ut av det, men ikke per nå...
/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/

// Skriv koden for oppgave 8 her
