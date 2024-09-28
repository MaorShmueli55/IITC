import {utils} from './utils.js';
import { employeesService } from './employees.service.js';

const elEmployeeForm = document.getElementById("employee-form")
elEmployeeForm.addEventListener("submit", function(){
    employeesService.addEmployee(event);
    elEmployeeForm.reset();
    renderEmployeesTable();
});


function renderEmployeesTable(){
    const tableBody = document.getElementById("table-body")
    const amount = document.getElementById("amount")
    const employees= employeesService.getFilterEmployee();
    
    tableBody.innerHTML = "";
    
    for(let i = 0; i < employees.length; i++){
        let newRow = tableBody.insertRow(i);
        newRow.setAttribute("id" , "row-" + employees[i].id)
        for(let j = 0; j <  Object.values(employees[i]).length -1; j++){
            newRow.insertCell(j).innerHTML = Object.values(employees[i])[j];
        }
        
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteBtn.addEventListener("click", function () {
            employeesService.deleteEmployee(employees[i].id);
            renderEmployeesTable(); 
          });

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.setAttribute("class" , "editBtn");

        editBtn.addEventListener("click", ()=>
            employeesService.editEmployee(newRow),
            employeesService.saveEmployee(newRow),
            ) 
        
    
        newRow.appendChild(deleteBtn);
        newRow.appendChild(editBtn);
    }
    amount.textContent = employees.length;

}
utils.getFromStorage();

const minFilterInput = document.getElementById("min-salary-filter")
const minFilterValue = document.getElementById("minSalaryValue")
const maxFilterInput = document.getElementById("max-salary-filter")
const maxFilterValue = document.getElementById("maxSalaryValue")
const ageInput = document.getElementById("age-filter");
const ageValue = document.getElementById("age-value");

ageInput.addEventListener("input", function () {
    ageValue.textContent = ageInput.value;
})
minFilterInput.addEventListener("input" , function(){
  minFilterValue.textContent = minFilterInput.value + "$";
})
maxFilterInput.addEventListener("input" , function(){
  maxFilterValue.textContent = maxFilterInput.value + "$";
})
        
document.querySelector(".Filter").addEventListener("click" , function(){
    employeesService.getFilterEmployee();
    renderEmployeesTable();
});

document.querySelector(".getAll").addEventListener("click" , function(){
    employeesService.clearFilter();
    renderEmployeesTable();
});
   
renderEmployeesTable();