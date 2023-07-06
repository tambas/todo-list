const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = []

function adicionarNovaTarefa() {
  minhaListaDeItens.push({
    tarefa: input.value,
    concluida: false,
  })

  input.value = ''

  mostrarTarefas()
}

function mostrarTarefas() {
  let novaLi = ''

  // ['comprar café', 'estudar programação']

  minhaListaDeItens.forEach((item, posicao) => {
    novaLi =
      novaLi +
      `

        <li class="task ${item.concluida && 'done'}">
            <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
            <img src="./img/delete.png" alt="check-na-tarefa" onclick="falharTarefa ${posicao && 'falhar'}">
            <p>${item.tarefa}</p>
            <img src="./img/trash.png" alt="tarefa-para-o-lixo" onclick="deletarItem(${posicao})">
        </li>

        `
  })

  listaCompleta.innerHTML = novaLi

  localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))
}

function concluirTarefa(posicao) {
  minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

  mostrarTarefas()
}

function falharTarefa(posicao) {
  minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

  mostrarTarefas()
}


function deletarItem(posicao) {
  minhaListaDeItens.splice(posicao, 1)

  mostrarTarefas()
}

function recarregarTarefas() {
  const tarefasDoLocalStorage = localStorage.getItem('lista')

  if (tarefasDoLocalStorage) {
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
  }

  mostrarTarefas()
}

function drag(event) {
  event.dataTransfer.setItem("lista". event.target.id);
}
 function allowDrop(event) {
  event.preventDefault();
 }
 function drop(event) {
  event.preventDefault();
  const taskId = event.dataTransfer.getItem("lista");
  const task = document.getElementsByClassName(list-tasks);
  const targetTask = event.target.closest("li");
  if (targetTask) {
    targetTask.parentNode.insertBefore(task, targetTask);
  }
 }

recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)
