if(localStorage.lista){
    document.querySelector('ul').innerHTML = localStorage.lista;
};

var tarefaAdicionada = document.querySelector('.tarefaAdicionada');
var ul = document.querySelector('ul');

//Criar Tarefa

function adTarefa(){
    if(tarefaAdicionada.value.length === 0){
        alert('Digite alguma tarefa no campo vazio.');
    } else {
        var li = document.createElement('li');
        var button = document.createElement('button');
        li.innerText = tarefaAdicionada.value;
        button.classList.add('apagar');
        ul.appendChild(li);
        li.appendChild(button);
        localStorage.setItem('lista', ul.innerHTML);
    }
}

// Apagar Tarefa

document.addEventListener('click', (e)=>{
    var el = e.target;
    if(el.classList == 'apagar'){
        el.parentElement.remove();
        localStorage.setItem('lista', ul.innerHTML);
    }
});
