// Get the modal windows and buttons
const addEmployeeModal = document.getElementById('add-employee-modal');
const deleteEmployeeModal = document.getElementById('delete-employee-modal');
const addEmployeeBtn = document.getElementById('add-employee-btn');
const deleteEmployeeBtn = document.getElementById('delete-employee-btn');

// Add event listeners to the buttons
addEmployeeBtn.addEventListener('click', () => {
    addEmployeeModal.style.display = 'block';
});

deleteEmployeeBtn.addEventListener('click', () => {
    deleteEmployeeModal.style.display = 'block';
});

// Add event listeners to the modal windows
addEmployeeModal.addEventListener('click', (e) => {
    if (e.target === addEmployeeModal) {
        addEmployeeModal.style.display = 'none';
    }
});

deleteEmployeeModal.addEventListener('click', (e) => {
    if (e.target === deleteEmployeeModal) {
        deleteEmployeeModal.style.display = 'none';
    }
});

// Add event listeners to the form submits
// ...

document.getElementById('add-employee-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    // Send the data to the server to add the employee
    fetch('/add-employee', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => {
        // Reload the table with the updated data
        const xhr = new XMLHttpRequest();
        xhr.open('GET', '/kursach/php/admin.php', true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                const employees = JSON.parse(xhr.responseText);
                const employeeList = document.getElementById('employee-list');
                employeeList.innerHTML = '';
                employees.forEach((employee) => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${employee.id}</td>
                        <td>${getPostName(employee.post)}</td>
                        <td>${employee.name}</td>
                        <td>${employee.second_name}</td>
                        <td>${employee.series}</td>
                        <td>${employee.number}</td>
                        <td>${employee.login}</td>
                        <td>${employee.password}</td>
                    `;
                    employeeList.appendChild(row);
                });
            }
        };
        xhr.send();
    });
});

document.getElementById('delete-employee-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    // Send the data to the server to delete the employee
    fetch('/delete-employee', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => {
        // Reload the table with the updated data
        const xhr = new XMLHttpRequest();
        xhr.open('GET', '/kursach/php/admin.php', true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                const employees = JSON.parse(xhr.responseText);
                const employeeList = document.getElementById('employee-list');
                employeeList.innerHTML = '';
                employees.forEach((employee) => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${employee.id}</td>
                        <td>${getPostName(employee.post)}</td>
                        <td>${employee.name}</td>
                        <td>${employee.second_name}</td>
                        <td>${employee.series}</td>
                        <td>${employee.number}</td>
                        <td>${employee.login}</td>
                        <td>${employee.password}</td>
                    `;
                    employeeList.appendChild(row);
                });
            }
        };
        xhr.send();
    });
});
const xhr = new XMLHttpRequest();
        xhr.open('GET', '/kursach/php/admin.php', true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                const employees = JSON.parse(xhr.responseText);
                const tableBody = document.getElementById('employee-list');
                employees.forEach(employee => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${employee.id}</td>
                        <td>${getPostName(employee.post)}</td>
                        <td>${employee.name}</td>
                        <td>${employee.second_name}</td>
                        <td>${employee.series}</td>
                        <td>${employee.number}</td>
                        <td>${employee.login}</td>
                        <td>${employee.password}</td>
                    `;
                    tableBody.appendChild(row);
                });
            }
        };
        xhr.send();

        function getPostName(postId) {
            switch (postId) {
                case '1':
                    return 'Администратор';
                case '2':
                    return 'Оператор';
                case '3':
                    return 'Техник по обслуживанию электросамокатов';
                default:
                    return 'Unknown';
            }
        }


