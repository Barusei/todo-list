todoInput = document.querySelector('.todo-input');
inputButton = document.querySelector('.input-button');
todoList = document.querySelector('.todo-list');
let filterItems = document.querySelector('.filter');

//const arrayList = [];

filterItems.addEventListener('keyup', filterList);

todoList.addEventListener('click', removeItem);

function addTodo(e){
    e.preventDefault()
    const todoName = todoInput.value;
    //arrayList.push(todoName);

    //text node
    let textN = document.createTextNode(todoInput.value);

    //create list element
    let li = document.createElement('li');

    li.className="list-group-item";
    
    li.appendChild(textN);
    
    //buttontext
    let buttontext = document.createTextNode('X');
    //delbutton
    let deletebtn = document.createElement('button');
    deletebtn.className="delete-button";
    deletebtn.appendChild(buttontext);

    //append delete button to li element
    li.appendChild(deletebtn);

    //append li to itemlist
    todoList.appendChild(li);

    todoInput.value='';
}
inputButton.addEventListener('click', addTodo)

function removeItem(e){
    e.preventDefault()
    if(e.target.classList.contains('delete-button')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            todoList.removeChild(li);
        }
    }

}

function filterList(e){
    var text = e.target.value.toLowerCase();

    let items = todoList.getElementsByTagName('li');
    Array.from(items).forEach((item) => {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
            
        } else{
            item.style.display = 'none';
        }
    })
}
