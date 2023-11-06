const todoForm = document.querySelector('#todo');
const ul = document.querySelector('#ul');


function addTodo(){
    console.log(todoForm.value);
    ul.innerHTML += `<li> </li>` ;
    ul.innerHTML += todoForm.value  ;
    todoForm.value = '';
}


function del(){

}


function edit(){
    
}