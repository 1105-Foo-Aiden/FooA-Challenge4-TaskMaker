import {NewcardContainer, createCard, saveToLocalStorage} from "./cardCreation.js"

let todoCard = document.getElementById('toDoCard')
let newTaskSubmitBtn = document.getElementById('newTaskSubmitBtn')
let newTaskDescription = document.getElementById('description')
let newDueDate = document.getElementById('newDueDate')


const loadLocal = () =>{
    
   Object.keys(localStorage).forEach((key =>{
    if(key.startsWith('To Do')){
        const cardData = JSON.parse(localStorage.getItem(key))
        let card = createCard(cardData.title, cardData.date, cardData.time, cardData.description)
        testDiv.appendChild(card)
    }
   }))
   
}

//submit btn function
newTaskSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault(); //prevents the page from reloading
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
