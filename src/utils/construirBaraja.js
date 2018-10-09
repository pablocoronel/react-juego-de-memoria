const NUMERO_DE_CARTAS = 20;

export default () => {
  const iconos = ["ico-1", "ico-2"];

  let cartas = [];

  while (cartas.length < NUMERO_DE_CARTAS) {
    const index = Math.floor(Math.random() * iconos.length);

    const carta = {
      icono: iconos.splice(index, 1)[0],
      fueAdivinada: false
    };

    cartas.push(carta);
    cartas.push({ ...carta });

    return cartas;
  }
};
