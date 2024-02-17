let employees = [
    { name: "Rajesh", age: 25, salary: 600000, position: "Software Engineer" },
    { name: "Pooja" ,age: 22, salary: 500000, position: "Software Tester" },
    { name: "Diya" ,age: 27, salary: 800000, position: "Senior Software Engineer" },
    { name: "Ramesh", age: 24, salary: 600000, position: "Software Engineer" },
    { name: "Srinivas", age: 24, salary: 600000, position: "Software Engineer" }
];

function shuffleArray(array) {
    for(let i=0; i<array.length; i++) {
        let randomNum = Math.floor(Math.random() * employees.length);
        let temp = employees[i];
        array[i] = array[randomNum];
        array[randomNum] = temp;
    }
}

let contentDiv = document.querySelector(".content");

let employeeNamesButton = document.getElementById("first");
let averageSalaryButton = document.getElementById("second");
let incrementButton = document.getElementById("third");
let employeesAgeButton = document.getElementById("fourth");
let addEmployee = document.getElementById("new-employee");

function displayNames(array) {
    for(let i=0; i<array.length; i++) {
        let para = document.createElement("p");
        para.textContent = array[i].name;
        contentDiv.appendChild(para);
    }
}

//Employee name
employeeNamesButton.addEventListener("click", ()=> {
    contentDiv.innerHTML = "";
    shuffleArray(employees);
    displayNames(employees);
});

//Average Salary
averageSalaryButton.addEventListener("click", ()=> {
    contentDiv.innerHTML = "";
    let total = 0;
    for(let i=0; i<employees.length; i++) {
        total += employees[i].salary;
    }
    let average = "₹" + (total/employees.length);
    contentDiv.textContent = average;
});

//Increment
incrementButton.addEventListener("click", ()=> {
    contentDiv.innerHTML = "";
    let incrementPercentage = prompt("Enter Increment Percentage");
    employees.forEach((employee) => {
        employee.salary += (incrementPercentage/100)*employee.salary;
    });
    alert("Employees salary incremented successfully");
});

//Employees Age
employeesAgeButton.addEventListener("click", ()=> {
    contentDiv.innerHTML = "";
    employees.sort((a, b) => a.age - b.age);
    displayNames(employees);
});

//Add new Employee
addEmployee.addEventListener("click", ()=> {
    let newName = prompt("Enter employee name");
    while(newName === null || newName === "") {
        alert("Enter valid name");
        newName = prompt("Enter employee name");
    }

    newAge = prompt("Enter employee age");
    while(newAge === null || newAge === "") {
        alert("Enter valid age");
        newAge = prompt("Enter employee age");
    }
    newAge = parseInt(newAge);

    newSalary = prompt("Enter employee salary");
    while(newSalary === null || newSalary === "") {
        alert("Enter valid salary");
        newSalary = prompt("Enter employee salary");
    }
    newSalary = parseInt(newSalary);

    newRole = prompt("Enter employee role");
    while(newRole === null || newRole === "") {
        alert("Enter valid role");
        newRole = prompt("Enter employee role");
    }

    employees.push({name: newName, age: newAge, salary: newSalary, position: newRole});
    alert("Employee added successfully");
})