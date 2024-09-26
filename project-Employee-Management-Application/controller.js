import {utils} from './utils.js';
let gEmployees= [
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

  let employees = [];
  function getFromStorage() {
      const employee_STORAGE_KEY = localStorage.getItem("employees");
      if(employee_STORAGE_KEY){
        employees = JSON.parse(employee_STORAGE_KEY);
        renderEmployeesTable();
      }
  }
  
  function saveToStorage() {
    localStorage.setItem("employees", JSON.stringify(employees));
  }
  
  const elEmployeeForm = document.getElementById("employee-form")
  elEmployeeForm.addEventListener("submit", function (ev) {
    ev.preventDefault();
  
    
    const fNameInput = document.getElementById("fName-input");
    const lNameInput = document.getElementById("lName-input");
    const ageInput = document.getElementById("age-input");
    const departmentInput = document.getElementById("department-inpUt");
    const salaryInput = document.getElementById("salary-input");
    const dateInput = document.getElementById("date-input");
  
    

    if (!fNameInput.value && !lNameInput.value && !ageInput.value && !departmentInput && !salaryInput.value && !dateInput.value) return;
    addEmployee(fNameInput.value ,lNameInput.value , ageInput.value , departmentInput , salaryInput.value , dateInput.value);
  
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

    const employees= getFilterEmployee();


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
            deleteEmployee(employees[i].id);
            saveToStorage();
            renderEmployeesTable(); 
          });

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.setAttribute("class" , "editBtn");

        editBtn.addEventListener("click", ()=>
            editEmployee(newRow)) 

    
        newRow.appendChild(deleteBtn);
        newRow.appendChild(editBtn);
    }
    amount.textContent = employees.length;

  }
  getFromStorage();

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

    gEmployees.push(employee);
    saveToStorage();
}

  function deleteEmployee(id){
    gEmployees = gEmployees.filter((currentEmployee)=> currentEmployee.id !=id)
  }



 
        const minFilterInput = document.getElementById("min-salary-filter")
        const minFilterValue = document.getElementById("minSalaryValue")
        const maxFilterInput = document.getElementById("max-salary-filter")
        const maxFilterValue = document.getElementById("maxSalaryValue")
        const ageInput = document.getElementById("age-filter");
        const ageValue = document.getElementById("age-value");


        ageInput.addEventListener("input", function () {
        ageValue.textContent = ageInput.value;
        });
        minFilterInput.addEventListener("input" , function(){
            minFilterValue.textContent = minFilterInput.value + "$";
        })
        maxFilterInput.addEventListener("input" , function(){
            maxFilterValue.textContent = maxFilterInput.value + "$";
        })






        function getFilterEmployee(){ 
        let employeeFilter = [...gEmployees];
        const fNameFilter = document.getElementById("fName-filter").value.toLowerCase();
        const lNameFilter = document.getElementById("lName-filter").value.toLowerCase();
        const departmentFilter = document.getElementById("department-filter").value;
        const minSalaryFilter = document.getElementById("min-salary-filter").value;
        const maxSalaryFilter = document.getElementById("max-salary-filter").value;
        const ageValue = document.getElementById("age-filter").value;
        
            if(fNameFilter){
                employeeFilter = employeeFilter.filter((currentEmployee) => 
                    currentEmployee.firstName.toLowerCase() === fNameFilter

                )
            }
            if(lNameFilter){
                employeeFilter = employeeFilter.filter((currentEmployee) => 
                currentEmployee.lastName.toLowerCase() === lNameFilter
            )}

            if(departmentFilter){
                employeeFilter = employeeFilter.filter((currentEmployee) =>
                    currentEmployee.department === departmentFilter
            )}
            if(minSalaryFilter){
                employeeFilter = employeeFilter.filter((currentEmployee) =>
                    currentEmployee.salary.toString() >= minSalaryFilter
            )}
            if(maxSalaryFilter){
                employeeFilter = employeeFilter.filter((currentEmployee) =>
                    currentEmployee.salary.toString() <= maxSalaryFilter
            )}
            if (ageValue) {
                employeeFilter = employeeFilter.filter(
                  (currentItem) => currentItem.age >= ageValue
                );
              }


                return employeeFilter;
                
            }
            
            
            
            
            document.querySelector(".Filter").addEventListener("click" , function(){
                getFilterEmployee();
                renderEmployeesTable();
    });



   
let currentlyEditingRow = null;
function editEmployee(newRow) {
  if (currentlyEditingRow && currentlyEditingRow !== newRow) {
    saveEmployee(currentlyEditingRow);
  }

  if (currentlyEditingRow === newRow) {
    saveEmployee(newRow);
    currentlyEditingRow = null;
  } else {
    currentlyEditingRow = newRow;
    newRow.querySelectorAll("td").forEach((cell, index) => {
      const currentCellText = cell.innerText;
      if (!cell.querySelector("input")) {
        const input = document.createElement("input");
        input.type = "text";
        input.value = currentCellText;
        cell.innerHTML = "";
        cell.appendChild(input);
      }
    });
  }
}

function saveEmployee(row) {
  const employeeId = row.id.split("-")[1]; 
  const employeeIndex = gEmployees.findIndex((emp) => emp.id === employeeId);

  row.querySelectorAll("td").forEach((cell, index) => {
    const input = cell.querySelector("input");
    if (input) {
      gEmployees[employeeIndex][
        Object.keys(gEmployees[employeeIndex])[index]
      ] = input.value;
      cell.innerHTML = input.value; 
    }
  });
  console.log(gEmployees);
}
        
        renderEmployeesTable();