// console.log("help");
const createStudent = [];

const expelStudent = [];
const house = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"]

const printToDom = (divId, textToPrint)=> {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const buildStudent=() => {
    const studentName = document.getElementById("student").value;
    const student = {
            
    name: studentName,
    house: house[Math.floor(Math.random()*house.length)],
    }  
createStudent.push(student);
cardAppear(createStudent);
};

 const sortButton = ()=> {
   document.getElementById('sort').addEventListener('click',buildStudent);
 };

 const expelButton = ()=> {
     document.getElementById('expel').addEventListener('click,');
  expelStudent.push(createStudent);

 };



// const buttonId = e.target.id;
    // if(buttonId === 'form') {
        // formAppear('');
// };


const formAppear= (form)=>{
    let domString = "";
    
    domString += `<form class="form-inline">`;
    domString += `<div class="form-group mb-2">`;
    domString +=  `<div class="form-group mx-sm-3 mb-2"></div>`;
    domString +=  `<label for="student" class="sr-only">Student name</label>`;
    domString += `<input type="text" class="form-control" id="student" placeholder="Student Name">`;
    domString += `<button type="button" id = "sort" class="btn btn-primary mb-2">Sort!!</button>`;
    domString += `</form>`;
    domString += `</div>`;  



printToDom('formplaceholder',domString);



sortButton();



};








// const createCard = (e) => {
    // console.log(e);
    // const buttonId = e.target.id;
    // const idon'tknow = [];
    // for(let i = 0; i < students.length; i++){
        // if(students[i] === buttonId){
            // students.push(students[i]);
        // }
    // }

    // duckPrinter(selectedDucks);
// };
const cardAppear= (studentArray)=>{
    console.log('cardAppear')
    let domString = "";
for(let i =0; i < studentArray.length; i++){
    
    
    domString += `<div class="card" style="width: 18rem;">`;
    domString +=  `<div class="card-body">`;
    domString += `<h5 class="card-title">${studentArray[i].name}</h5>`;
    domString +=  `<h6 class="card-subtitle mb-2 text-muted">${studentArray[i].house}</h6>`;
    domString +=  `<p class="card-text">Welcome to our house!!!  Please learn our rules and conduct yourself appropriately.</p>`;
    domString += `<button id = "expel">Expel</button>`
    domString += `</div>`;
    domString += `</div>`;

    
    
    
}
printToDom('card',domString);
};

const events = () => {
    document.getElementById('form').addEventListener('click',formAppear);
    // document.getElementById('card').addEventListener('click',formAppear);
    // document.getElementById('yellow').addEventListener('click',chooseColor);
}

events();
