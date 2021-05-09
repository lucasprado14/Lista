let input = prompt('O que deseja fazer?');
const lista = ['Limpar o quarto', 'Comprar ovos'];
while (input !== 'sair' && input !== 's') {
    if (input === 'lista') {
        console.log('*******************')
        for (let i = 0; i < lista.length; i++) {
            console.log(`${i}: ${lista[i]}`);
        }
        console.log('*******************')
    }
    else if (input === 'novo') {
        const novaLista = prompt('O que deseja adicionar a lista?');
        lista.push(novaLista);
        console.log(`${novaLista} tarefa adicionada a lista!`)
    } else if (input === 'remover') {
        const index = parseInt(prompt('Digite um numero a ser deletado:'));
        if (!Number.isNaN(index)) {
            const removido = lista.splice(index, 1);
            console.log(`Removido ${removido[0]}`);
        } else {
            console.log('Valor não encontrado')
        }


    }
    input = prompt('O que deseja fazer?')
}
console.log('Saindo do aplicativo')