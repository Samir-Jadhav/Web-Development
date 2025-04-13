var TodoListApp = (function(){
    let tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');

console.log('Working');
var a =10;


async function fetchTodos(){
    // //Get Request
    // fetch('https://jsonplaceholder.typicode.com/todos')
    // .then(function(response){
    //     console.log(response);
    //     return response.json();

    // }).then(function(data){
    //     console.log(data);
    //     tasks= data.slice(0,10);
    //     renderList();

    // }) .catch(function(error){
    //     console.log('error',error);
    // })
try{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    tasks = data.slice(0,10);
    renderList();

}
catch{
    console.log('error');
}


    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
 const data = await response.json();
 tasks = data.slice(0,10);
 renderList();
}

function addTaskToDom(task){
    const li = document.createElement('li');

    li.innerHTML = `
          <input type="checkbox" id="${task.id}" ${task.completed ? 'checked' : ''} class="custom-checkbox">
          <label for="${task.id}">${task.title}</label>
          <img src="bin.svg" class="delete" data-id="${task.id}" />
    
    
    `;
    taskList.append(li);

}

function renderList () {
    taskList.innerHTML = '';
    for(let i = 0; i < tasks.length; i++){
        addTaskToDom(tasks[i]);
    }

    tasksCounter.innerHTML = tasks.length;

}

function toggleTask (taskId) {
    const task = tasks.filter(function(task){
        return task.id === Number(taskId)
        });
    if(task.length > 0){
        task[0].completed = !task[0].completed;
        renderList();
        showNotification('Task toggled successfully');
        return;


    }
    showNotification('Task not found');


}

function deleteTask (taskId) {
    const newTasks = tasks.filter(function(task){
        return task.id !== Number(taskId);
        });
        tasks = newTasks;
        renderList();
        showNotification('Task deleted successfully');
}  

function addTask (task) {
    if(task){
        tasks.push(task);
        renderList();
        showNotification('Task added successfully');
        return;
    }
    showNotification('Please enter a task');
}

function showNotification(text) {
    alert(text);
}

function handleInputKeypress(e){

    if(e.key==='Enter'){
        const text = e.target.value;
        // console.log(text);

        if(!text){
            showNotification('Please enter a task');
            return;
        }

        const task = {
            title:text,
            id: Date.now(),
            completed: false,
        }
        e.target.value ='';
        addTask(task);

    }
}

function handleClickListner(e){
    const target = e.target;
    if(target.className === 'delete'){
        const taskId = target.dataset.id;
        deleteTask(taskId);
        return;

    } else if(target.className ==='custom-checkbox'){
        const taskId = target.id;
        toggleTask(taskId);
        return;

    }


}
function initializeApp(){

    fetchTodos();
    document.addEventListener('click',handleClickListner);
    addTaskInput.addEventListener('keyup', handleInputKeypress);
}


return{
initialize: initializeApp,
a:a
}

})()

