const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')
function addTask(){
    if(inputBox.value === ''){
        alert('Please Enter A Task');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00D7';
        li.appendChild(span);
        saveData();
    }
    inputBox.value = '';
}
listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
} 
function loadData(){
    listContainer.innerHTML = localStorage.getItem('data');
}
loadData();
inputBox.addEventListener('keypress', function(e){
    if (e.key === 'Enter') {
        addTask();
    }
});
var clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', function() {
var taskList = document.getElementById('list-container');

    taskList.innerHTML = '';
    localStorage.clear();

});
var clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', function() {
    var taskList = document.getElementById('list-container');

    var confirmClear = confirm("Are you sure you want to clear all tasks?");
    if (confirmClear) {
        taskList.innerHTML = '';
        localStorage.clear();
    }
});