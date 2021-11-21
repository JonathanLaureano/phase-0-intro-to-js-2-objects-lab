// Write your solution in this file!
const employee = {
    name: "martha",
    streetAddress: "11 King",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value,
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee 
}
function deleteFromEmployeeByKey(employee, key) {
    const newObj = Object.assign({}, employee)
    delete newObj[key]
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee
}
