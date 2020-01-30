// console.log("help");
const createStudent = [];

const expelStudent = [];


const printToDom = (divId, textToPrint)=> {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const duckPrinter = (ducks)=>{
    let domString = "";
for(let i =0; i < ducks.length; i++){
    
    domString += 


    domString += 
    domString += 
    domString += 
    domString += 
    domString += 
    domString += 
    domString += 
    domString += 
// domString += `<h2 id = name>${ducks[i].name}</h2>`
}
printToDom('name',domString);
};
const chooseColor = (e) => {
    console.log(e);
    const buttonId = e.target.id;
    const selectedDucks = [];
    for(let i = 0; i < ducks.length; i++){
        if(ducks[i].color === buttonId){
            selectedDucks.push(ducks[i]);
        }
    }

    duckPrinter(selectedDucks);
};


const events = () => {
    document.getElementById('blue').addEventListener('click',chooseColor);
    document.getElementById('red').addEventListener('click',chooseColor);
    document.getElementById('yellow').addEventListener('click',chooseColor);
}


