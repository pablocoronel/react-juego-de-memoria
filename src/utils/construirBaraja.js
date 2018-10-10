const NUMERO_DE_CARTAS = 20;

export default () => {
	const clasesFontAwesome = ['ico-1', 'ico-2'];

	let cartas = [];

	while (cartas.length < NUMERO_DE_CARTAS) {
		const index = Math.floor(Math.random() * clasesFontAwesome.length);

		const unaCarta = {
			icono: clasesFontAwesome.splice(index, 1)[0],
			fueAdivinada: false
		};

		cartas.push(unaCarta);
		cartas.push({ ...unaCarta });

		return cartas;
	}
};
