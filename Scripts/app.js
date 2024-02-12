import {NewcardContainer, createCard, saveToLocalStorage} from "./cardCreation.js"

let toDoNum = document.getElementById('toDo')
let inProgressNum = document.getElementById('inProgress')
let completedNum = document.getElementById('completed')
let todoCard = document.getElementById('toDoCard')
let inProgressCard = document.getElementById('inProgressCard')
let completedCard = document.getElementById('completedCard')
let newTaskSubmitBtn = document.getElementById('newTaskSubmitBtn')
let newTaskDescription = document.getElementById('description')
let newTaskTime = document.getElementById('newTaskTime')
let newTaskName = document.getElementById('newTaskName')
let newDueDate = document.getElementById('newTaskDueDate')
let testDiv = document.getElementById('testDiv')

const loadLocal = () =>{
    
   Object.keys(localStorage).forEach((key =>{
    if(key.startsWith('To Do')){
        const cardData = JSON.parse(localStorage.getItem(key))
        createCard(cardData.title, cardData.date, cardData.time, cardData.description)
        testDiv.appendChild(card)
    }
   }))
   
}

//submit btn function
newTaskSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault(); //stops the page from reloading
    todoCard.textContent = " "
    //saving values of form feild in a varibale to use in functions as perameters
    let title = newTaskName.value;
    let dueDate = newDueDate.value;
    let dueTime = newTaskTime.value;
    let description = newTaskDescription.value;
    
    //card creation from JS file with same name
    let card = createCard(title, dueDate, dueTime, description);
    saveToLocalStorage(title, dueDate, dueTime, description)

    testDiv.appendChild(card)
});

loadLocal()

