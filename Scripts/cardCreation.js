/*recreating this button with JS

just no link in header and there needs to be multiple buttons for moving it, and deleting it    

<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>

*/

let NewcardContainer = document.createElement("div");

function createCard(title, dueDate, dueTime, description) {
  NewcardContainer.classList = "max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700";

  let Newtitle = document.createElement("p");
  Newtitle.classList = "mb-1 font-bold text-3xl text-gray-900 dark:text-white";
  Newtitle.textContent = title;

  let NewdueDate = document.createElement("p");
  NewdueDate.classList = "mb-1 text-xl font-normal text-gray-700 dark:text-gray-400";
  NewdueDate.textContent = `Due Date: ${dueDate}`;

  let NewdueTime = document.createElement("p");
  NewdueTime.classList = "mb-1 text-lg font-normal text-gray-700 dark:text-gray-400";
  NewdueTime.textContent = `Due Time: ${dueTime}`;

  let Newdescription = document.createElement("p");
  Newdescription.classList = "mb-3 text-sm font-normal text-gray-700 dark:text-gray-400";
  Newdescription.textContent = `Description: ${description}`;

  let removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.classList ="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800";
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", () => {
    NewcardContainer.remove();
  });

  let moveBtn = document.createElement("button");
  moveBtn.type = "button";
  moveBtn.classList =
    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800";
  moveBtn.textContent = "->";
  moveBtn.addEventListener("click", () => {

  });
  let br = document.createElement('br')
  //fully create card
  NewcardContainer.appendChild(Newtitle);
  NewcardContainer.appendChild(NewdueDate);
  NewcardContainer.appendChild(NewdueTime);
  NewcardContainer.appendChild(Newdescription);
  NewcardContainer.appendChild(br)
  NewcardContainer.appendChild(removeButton);
  NewcardContainer.appendChild(moveBtn);

 return NewcardContainer;
 
 
  }
  
//saving the output into local storage
 const saveToLocalStorage = (title, date, time, description) =>{
    const cardData = {
        title: title,
        date: date,
        time: time,
        description: description
    }
    localStorage.setItem('To Do', JSON.stringify(cardData))
}
export { createCard, NewcardContainer, saveToLocalStorage };
