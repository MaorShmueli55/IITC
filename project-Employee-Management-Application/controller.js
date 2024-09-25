import {utils} from './utils.js';
let gImployees= [
    {
        firstName: "Alice",
        lastName: "Smith",
        age: 28,
        startDate: "2020-06-15",
        department: "Marketing",
        salary: 50000,
        id: utils.makeId(),
    },
    {
        firstName: "John",
        lastName: "Doe",
        age: 35,
        startDate: "2018-01-25",
        department: "Sales",
        salary: 60000,
        id: utils.makeId(),
    },
    {
        firstName: "Emma",
        lastName: "Johnson",
        age: 42,
        startDate: "2015-03-12",
        department: "IT",
        salary: 70000,
        id: utils.makeId(),
    },
    {
        firstName: "Michael",
        lastName: "Brown",
        age: 30,
        startDate: "2019-07-01",
        department: "Finance",
        salary: 55000,
        id: utils.makeId(),
    },
    {
        firstName: "Sophia",
        lastName: "Williams",
        age: 26,
        startDate: "2021-05-20",
        department: "HR",
        salary: 45000,
        id: utils.makeId(),
    },
    {
        firstName: "David",
        lastName: "Taylor",
        age: 39,
        startDate: "2017-09-14",
        department: "Operations",
        salary: 64000,
        id: utils.makeId(),
    },
    {
        firstName: "Laura",
        lastName: "White",
        age: 32,
        startDate: "2016-11-03",
        department: "Logistics",
        salary: 50000,
        id: utils.makeId(),
    }
  ]
  
  const elEmployeeForm = document.getElementById("employee-form")
  elEmployeeForm.addEventListener("submit", function (ev) {
    ev.preventDefault();
  
    
    const fNameInput = document.getElementById("fName-input");
    const lNameInput = document.getElementById("lName-input");
    const ageInput = document.getElementById("age-input");
    const departmentInput = document.getElementById("department-inpUt");
    const salaryInput = document.getElementById("salary-input");
    const dateInput = document.getElementById("date-input");
  
    
    if (!fNameInput.value && !lNameInput.value && !ageInput.value && !departmentInput.value && !salaryInput.value && !dateInput.value) return;
    addEmployee(fNameInput.value ,lNameInput.value , ageInput.value , departmentInput.value , salaryInput.value , dateInput.value);
  
    renderEmployeesTable();
  
    fNameInput.value = "";
    lNameInput.value = "";
    ageInput.value = "";
    departmentInput.value = "";
    salaryInput.value = "";
    dateInput.value = "";
  });
  
  function renderEmployeesTable(){
    const tableBody = document.getElementById("table-body")
    const amount = document.getElementById("amount")
    const addBtn = document.getElementById

    tableBody.innerHTML = "";

    for(let i = 0; i < gImployees.length; i++){
        let newRow = tableBody.insertRow(i);
        newRow.setAttribute("id" , "row-" + gImployees[i].id)
        for(let j = 0; j <  Object.values(gImployees[i]).length -1; j++){
            newRow.insertCell(j).innerHTML = Object.values(gImployees[i])[j];
        }
        const deleteBtn = document.createElement("button");
        const editBtn = document.createElement("button");
        deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        editBtn.textContent = "Edit";

        deleteBtn.addEventListener("click", function () {
            deleteEmployee(gImployees[i].id);
            renderEmployeesTable(); // this is not recursive
          });

        newRow.appendChild(deleteBtn);
        newRow.appendChild(editBtn);
    }
    amount.textContent = gImployees.length;

  }

function addEmployee(fName, lName , age, department, salary , date){
    const employee ={
        firstName: fName,
        lastName: lName,
        age: age,
        startDate: date,
        department: department,
        salary: salary,
        id: utils.makeId(),
    }

    gImployees.push(employee);
}

  function deleteEmployee(id){
    gImployees = gImployees.filter((currentEmployee)=> currentEmployee.id !=id)
  }


  renderEmployeesTable();