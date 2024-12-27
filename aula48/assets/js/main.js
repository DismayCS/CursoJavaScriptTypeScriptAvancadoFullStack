//exercicios Criar uma lista de tarefas que salva os conteudos mesmo após os reloads da pagina.

//query's

const inputTarefa = document.querySelector('.input-tarefa');
const addTarefa = document.querySelector('.btn-add-tarefa');
const listaTarefas = document.querySelector('.tarefas');

//functions

function limpaInputText(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaLi(){
    const li = document.createElement('li');
    return li;
};

function addRemoveBtn(){
    let removeBnt = document.createElement('button');
    removeBnt.textContent = 'remover';
    removeBnt.setAttribute('class','apagar')
    return removeBnt;
}

function criaTarefa(inputTarefa){
    let li = criaLi();
    let removeBnt = addRemoveBtn();
    
    li.textContent = inputTarefa;
    li.appendChild(removeBnt);
    listaTarefas.appendChild(li);
    salvarLista();
}

function salvarLista(){
    const liTarefas = listaTarefas.querySelectorAll('li');
    const savListTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('remover','').trim();
        savListTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(savListTarefas);
    localStorage.setItem('tarefas',tarefasJSON);
}

function addTarefaSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const savListTarefas = JSON.parse(tarefas);

    for(let tarefa of savListTarefas){
        criaTarefa(tarefa);
    };
}

//event listners

addTarefa.addEventListener('click', function(){
criaTarefa(inputTarefa.value);
limpaInputText();
});

inputTarefa.addEventListener('keypress', function(e){


    if(e.keyCode === 13){
criaTarefa(inputTarefa.value);
limpaInputText();
}
});

document.addEventListener('click', function(e){
    const el = e.target;
    
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
    }
    salvarLista();
})

addTarefaSalvas()