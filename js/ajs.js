//-------iskvieciame duomenu ivedimo forma
function display() {
    let x = document.getElementById("dataform");
    x.style.display = "block";
}

const input = document.getElementById("taskInput").value;
const date = document.getElementById("dueDate").value;
const priority = document.getElementById("inputPriority").value;
const progress = document.getElementById("inputProgres").value;

const masyvoObjektas = {
    input: input,
    date: date,
    priority: priority,
    progress: progress
}
let masyvas = [];

const button = document.querySelector('#confirm');
button.addEventListener('click', read);

function read(e) {
    e.preventDefault()
    masyvas.push(masyvoObjektas);

}

console.log(masyvas);
// localStorage.setItem('duomenuMasyvas', duomenuMasyvas);
// console.log(localStorage.getItem('duomenuMasyvas'));