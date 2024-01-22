/*DNA String Filter:**
       - Create a function to process a DNA string (e.g., 'CTAGGGTA').
       - The function should remove any non-canonical DNA bases (anything other than 'C', 'T', 'A', 'G').
       - The function should be case sensitive (keep 'C' but remove 'c').
       - If the DNA string is empty, return an empty string. */

function procesarADN(cadenaADN) {
  //cadena vacia

  let cadenaProcesada = ""; //voy a almacenar las bases canonicas
  //bucle for para recorrer cada caracter de la cadena
  for (let i = 0; i < cadenaADN.length; i++) {
    let baseActual = cadenaADN[i];

    // para varificar si la base es canonica C T A o G
    if (
      baseActual === "C" ||
      baseActual === "T" ||
      baseActual === "A" ||
      baseActual === "G"
    ) {
      // si es canonica, añadimos la base a la cadena procesada
      cadenaProcesada = cadenaProcesada + baseActual;
    }
  }
  return cadenaProcesada;
}

console.log(procesarADN("CTAGGGTA"));
console.log(procesarADN("ctaGGGTA"));
console.log(procesarADN(""));
console.log(procesarADN("CTAGMc"));

module.exports = procesarADN;
