import shuffle from 'lodash.shuffle';
import FontAwesomeClasses from './fontAwesomeClasses';

const NUMERO_DE_CARTAS = 20;
export default () => {
	const clasesFontAwesome = FontAwesomeClasses();
	let cartas = [];

	while (cartas.length < NUMERO_DE_CARTAS) {
		const index = Math.floor(Math.random() * clasesFontAwesome.length);

		const unaCarta = {
			icono: clasesFontAwesome.splice(index, 1)[0],
			fueAdivinada: false
		};

		cartas.push(unaCarta);
		cartas.push({ ...unaCarta });
		// console.log(cartas.length);
	}
	return shuffle(cartas);
};
