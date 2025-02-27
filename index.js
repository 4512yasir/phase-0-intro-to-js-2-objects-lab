// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,  
        [key]: value  
    };
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;  // Modify the original object
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };  // Clone employee
    delete newEmployee[key];  // Remove key
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; 
    return employee;
}
