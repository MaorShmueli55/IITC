import { utils } from "./utils.js";

const EMPLOYEE_STORAGE_KEY = "employee"
let gEmployees =  utils.getFromStorage(EMPLOYEE_STORAGE_KEY) || [];

function addEmployee(event){
    event.preventDefault();
    const employee ={
        firstName: event.target[0].value,
        lastName: event.target[1].value,
        age: event.target[2].value,
        startDate: event.target[5].value,
        department: event.target[3].value,
        salary: event.target[4].value,
        id: utils.makeId(),
    }
    gEmployees.push(employee);
    // elEmployeeForm.reset();
    console.log(gEmployees);
    
    utils.saveToStorage(EMPLOYEE_STORAGE_KEY , gEmployees)
}

function deleteEmployee(id){
    gEmployees = gEmployees.filter((currentEmployee)=> currentEmployee.id !=id)
    utils.saveToStorage(EMPLOYEE_STORAGE_KEY , gEmployees)
  }

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
  )}
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
      employeeFilter = employeeFilter.filter((currentItem) => 
        currentItem.age >= ageValue
      )}
      return employeeFilter; 
  }
    
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
    utils.saveToStorage(EMPLOYEE_STORAGE_KEY , gEmployees)
  }

  function clearFilter(){ 
    document.getElementById("fName-filter").value = ""
    document.getElementById("lName-filter").value = "";
    document.getElementById("department-filter").value = "";
    document.getElementById("min-salary-filter").value = "0";
    document.getElementById("minSalaryValue").textContent = "";
    document.getElementById("max-salary-filter").value = "99000";
    document.getElementById("maxSalaryValue").textContent = "";
    document.getElementById("age-filter").value = "16";
    document.getElementById("age-value").textContent = ""
}

  export const employeesService = {
    addEmployee,
    deleteEmployee,
    getFilterEmployee,
    editEmployee,
    saveEmployee,
    clearFilter,
  };