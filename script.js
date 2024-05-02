const input = document.getElementById('input')
const button = document.getElementById('button')
const ul = document.getElementById('ul')

button.addEventListener("click", function(e){

    if(input.value.length > 0){
    e.preventDefault()
    const listItem = document.createElement('li')
    const addItem = document.createElement('span')
    const deleteButton = document.createElement('button')
    const doneButton = document.createElement('button')

    addItem.classList.add('item')
    addItem.innerText = input.value
    deleteButton.classList.add('del')
    deleteButton.innerText = 'Del'
    doneButton.classList.add('done')
    doneButton.innerText='Done'

    listItem.appendChild(addItem)
    listItem.appendChild(doneButton)
    listItem.appendChild(deleteButton)
    ul.appendChild(listItem)

    deleteButton.addEventListener('click',function () {
        ul.removeChild(listItem)
    })

    doneButton.addEventListener('click', function () {
        const span = listItem.querySelector('.item')
        span.style.color="#1e3799"
        span.style.textDecoration = 'line-through'
    })

    input.value = ''
    input.focus()
    }else {
        e.preventDefault()
        alert("Enter Something")
    }
})