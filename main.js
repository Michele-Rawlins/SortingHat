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


const removeStudent = (i)=> {
    removeOrigStudent = createStudent.splice(i,1)
    expelStudent.push(removeOrigStudent);
    console.log(expelStudent);
    
    // let removeCard = document.getElementById("expel");
    // removeCard.splice(buildStudent);
};



 const expelButton = (removeStudent)=> {
   for(let i = 0; i < studentArray.length; i++){
   console.log('expelButton');
    document.getElementById('expel').addEventListener('click',removeStudent);
  expelButton.parentNode.removeChild('expel'); expelStudent.push();
   }
 };



// const buttonId = e.target.id;
// (let i = 0; i < studentArray.length;i++);
// =buttonId
    // if(buttonId === 'expel') {
        // expelButton('');
// };


const formAppear= ()=>{
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
    
    
    domString += `<div class="card" style="width: 18rem"; "d-flex flex-wrap">`;
    domString +=  `<div class="card-body ${studentArray[i].house}">`;
    domString += `<h5 class="card-title">${studentArray[i].name}</h5>`;
    domString +=  `<h6 class="card-subtitle mb-2 text-muted">${studentArray[i].house}</h6>`;
    domString +=  `<p class="card-text">Welcome to our house!!!  Please learn our rules and conduct yourself appropriately.</p>`;
    domString += `<a onClick = "removeStudent(${i})" id = "expel">Expel</a>`
    domString += `</div>`;
    domString += `</div>`;

    
    
    
}
printToDom('card',domString);
};

const events = () => {
    document.getElementById('form').addEventListener('click',formAppear);
    // document.getElementById('expel').addEventListener('click',expelButton);
    // document.getElementById('yellow').addEventListener('click',chooseColor);
}

events();
