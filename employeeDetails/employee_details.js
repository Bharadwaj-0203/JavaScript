const employees = [
  { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
  { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
  { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
  { id: 4, name: 'Emily Davis', age: 32, department: 'Marketing', salary: 52000 },
  { id: 5, name: 'Michael Brown', age: 40, department: 'IT', salary: 55000 },
  { id: 6, name: 'Sophia Wilson', age: 29, department: 'Finance', salary: 62000 },
  { id: 7, name: 'James Moore', age: 37, department: 'HR', salary: 47000 },
  { id: 8, name: 'Olivia Taylor', age: 25, department: 'Marketing', salary: 48000 },
  { id: 9, name: 'William Anderson', age: 45, department: 'IT', salary: 70000 },
  { id: 10, name: 'Isabella Martinez', age: 31, department: 'Finance', salary: 63000 },
  { id: 11, name: 'Ethan Thomas', age: 33, department: 'Marketing', salary: 50000 },
  { id: 12, name: 'Ava Jackson', age: 27, department: 'HR', salary: 46000 },
  { id: 13, name: 'Liam White', age: 34, department: 'Finance', salary: 61000 },
  { id: 14, name: 'Mia Harris', age: 26, department: 'IT', salary: 52000 },
  { id: 15, name: 'Noah Clark', age: 38, department: 'Marketing', salary: 49000 },
  { id: 16, name: 'Charlotte Lewis', age: 30, department: 'HR', salary: 48000 },
  { id: 17, name: 'Logan Walker', age: 29, department: 'Finance', salary: 60000 },
  { id: 18, name: 'Amelia Hall', age: 32, department: 'IT', salary: 54000 },
  { id: 19, name: 'Benjamin Young', age: 41, department: 'Marketing', salary: 51000 },
  { id: 20, name: 'Harper Allen', age: 28, department: 'HR', salary: 47000 }
];

function displayEmployees(){
    const totalEmployees = employees.map((employee,index)=> `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - ${employee.salary}`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries(){
    const totalSalaries = employees.reduce((total,emp)=>total+emp.salary,0);
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees(){
    const HREmployees = employees.filter((emp)=>emp.department==='HR');
    const HREmpDisplay = HREmployees.map((employee)=> `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = HREmpDisplay;
}

function findEmployeeById(employeeId) {
      const foundEmployee = employees.find(employee => employee.id === employeeId);
      if (foundEmployee) {
      document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
      }
      else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';

      }
    }
