const creatBtn = document.querySelector('.submit-btn')
const inputField = document.querySelector("input[type='text']")
const outputDiv = document.querySelector('.output-box')


creatBtn.addEventListener('click', createTodo)



function createTodo(){
    let value = inputField.value;
    
    if(!value){
        alert('Enter a todo task in input field.')
        return
    }

    let p = document.createElement('p')
    p.setAttribute('class', 'task')
    p.setAttribute('onmouseOver', 'mouseOn()')
    p.setAttribute('onmouseOut', 'mouseOut()')
    p.textContent = `Task: ${value}`
    p.innerHTML += `
    <span class="icon-container">
      <i class="fa-solid fa-check icon icon-done" onclick="taskDone(this)"></i>
      <i class="fa-solid fa-trash-can icon icon-delete" onclick="taskDelete(this)"></i>
    </span>
    `

    outputDiv.append(p)
    
    // clear input field
    inputField.value = ''

}

function mouseOn(){
    let iconContainer = document.querySelector('.icon-container')
    iconContainer.style.display = 'block'
}

function mouseOut(){
    let iconContainer = document.querySelector('.icon-container')
    iconContainer.style.display = 'none'
}

function taskDone(element){
    element.parentNode.parentNode.classList.add('task-done')
    element.remove()
}

function taskDelete(element){
    element.parentNode.parentNode.remove()
}