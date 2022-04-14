const listaDeDestinos = new Array(
	`Salvador`,
	`São Paulo`,
	`Rio de Janeiro`
);

const destino = `Curitiba`;
let contador = 0;
let destinoExiste = false;
listaDeDestinos.push(`Curitiba`);

while(contador < 4) {

	if(listaDeDestinos[contador] == destino) {
		console.log(listaDeDestinos[contador]);
		destinoExiste = true;
		break;
	}
	
	contador++;
}

console.log("Destino existe: ", (destinoExiste ? 'Sim' : 'Não'));