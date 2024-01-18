const inputBox = document.getElementById('input-box')

const listContainer = document.getElementById('list-container')

function addTask(){
    if (inputBox.value === '')
        alert('Debes escribir algo antes de agregar!')
    else{
        let li = document.createElement('li')
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    inputBox.value= "";
    guardarLista();
}

listContainer.addEventListener('click', function(e){
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        guardarLista();
    }
    else if (e.target.tagName=== 'SPAN'){
        e.target.parentElement.remove();
        guardarLista();
    }
}, false);

function guardarLista(){
    localStorage.setItem('lista', listContainer.innerHTML);
}

function mostrarLista(){
    listContainer.innerHTML = localStorage.getItem('lista')
}
mostrarLista();