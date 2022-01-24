if(localStorage.lista){
    document.querySelector('ul').innerHTML = localStorage.lista;
};

const btnAdicionar = document.getElementById('btnAdicionar');
const inputTafera = document.getElementById('inputTafera');
let ul = document.querySelector('ul');

btnAdicionar.addEventListener('click', () => {
    if(inputTafera.value.length === 0){
        alert('Preencha o campo de tarefas.');
    } else {
        ul.innerHTML += `<li>${inputTafera.value}<i class="fas fa-trash" onclick="remover(this)"></i></li>`;
        localStorage.setItem('lista', ul.innerHTML);
    }
});

function remover(e){
    e.parentElement.remove();
    localStorage.setItem('lista', ul.innerHTML);
};
