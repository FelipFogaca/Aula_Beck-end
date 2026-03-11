/**
 * 2. Crie um sistema de tarefas
    * Crie um vetor que armazene as tarefas
    * Crie funções de adicionar, listar e remover
    * Trabalhe as ações, demonstração a execução das funções
 */
let vetor = []

function adicionar(tarefa) {
    let id = 0;
    for (let opt of vetor) {
        if (id < opt.id) {
            id = opt.id;
        }
    }
    vetor.push({ id: id + 1, nome: tarefa });
}

function remover(id) {
    const hasId = vetor.some(it => it.id === id);

    if (hasId) {
        vetor = vetor.filter(it => it.id != id);
    } else {
        console.log("Não existe o ID informado.");
    }
}

function listar() {
    for (let opt of vetor) {
        console.log(opt)
    }
}

// Adiciona tarefa
adicionar("Escovar os dentes");
adicionar("Lavar o rosto");
listar();
remover(1);
listar();
adicionar("Tomar café");
listar();