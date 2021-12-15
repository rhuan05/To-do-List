var tarefaAdicionada = document.querySelector('.tarefaAdicionada');
var ul = document.querySelector('ul');

//Criar Tarefa

function adTarefa(){
    if(tarefaAdicionada.value.length === 0){
        alert('ERRO');
    } else {
        var li = document.createElement('li');
        var button = document.createElement('button');
        li.innerText = tarefaAdicionada.value;
        button.classList.add('apagar');
        ul.appendChild(li);
        li.appendChild(button);
    }
    salvarTarefas();
}

// Apagar Tarefa

document.addEventListener('click', (e)=>{
    var el = e.target;
    if(el.classList == 'apagar'){
        el.parentElement.remove();
    }
    salvarTarefas();
});

// Salvar Tarefas

function salvarTarefas(){
    const liTarefas = ul.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let ul of liTarefas){
        let tarefaTexto = ul.innerText;
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
};