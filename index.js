const {prompt} = require('inquirer');
const {findAllRoles, showEmployees, showByDepartment, showByManager, addEmployee, removeEmployee, updateEmployee}= require('./lib/employee')




// inquirer to dos
const menuPrompt = () => {
    return prompt ([
        {
            type: 'list',
            name: 'menuChoice',
            message: 'What would you like to do?',
            choices: 
            [
                'View All Employees', 
                'View All Employees By Department', 
                'View All Employee By Manager',
                'Add Employee',
                'Remove Employee',
                'Update Employee',
                'Update Employee Manager',
                'View All Rols',
                'Add Role',
                'Remove Role',
                'View All Departments',
                'Add Department',
                'Remove Department',
                'View Total Utilized Buget By Department',
                'Quit',
            ],
            validate: choice => {
                if(choice) {
                    return true;
                } else {
                    console.log('Please enter a name.');
                    return false; 
                }
            }
        }
    ])
};

// inquirer add employee
const askToAddEmployee = () => {
    return prompt ([
        {
            type: 'list',
            name: 'erole',
            message: "What is the employee's role? ",
            choices: findAllRoles(function(res) {
                return res;
            }),
            validate: answer => {
                if(answer) {
                    return true;
                } else {
                    console.log('Please select a role.');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'efirst_name',
            message: "What is the employee's first name?",
            validate: answer => {
                if(answer) {
                    return true;
                } else {
                    console.log('Please enter a name.');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'elast_name',
            message: "What is the employee's last name?",
            validate: answer => {
                if(answer) {
                    return true;
                } else {
                    console.log('Please enter a name.');
                    return false; 
                }
            }
        }
    ])
    // .then(([rows])),
    .then(answer => {
        console.log(answer)
        addEmployee(answer)
        setTimeout(function() {
            init()
        }, 500)
    });
};

// inquirer remove employee
const askToRemoveEmployee = () => {
    return prompt ([
        {
            type: 'input',
            name: 'id',
            message: "Which employee whould you like to remove?",
            validate: answer => {
                if(answer = Number) {
                    return true;
                } else {
                    console.log('Please enter a number.');
                    return false; 
                }
            }
        }
    ])
    .then(answer => {
        console.log(answer);
        removeEmployee(answer);
        setTimeout(function() {
            init()
        }, 500)
    }) 
}

// inquirer update employee
const askToUpdateEmployee = () => {
    return prompt ([
        {
            type: 'input',
            name: 'role_id',
            message: "Which role whould you like to update to?",
            validate: answer => {
                if(answer = Number) {
                    return true;
                } else {
                    console.log('Please enter a number.');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Which employee whould you like to update?",
            validate: answer => {
                if(answer = Number) {
                    return true;
                } else {
                    console.log('Please enter a number.');
                    return false; 
                }
            }
        }
    ])
    .then(answer => {
        console.log(answer);
        updateEmployee(answer);
        setTimeout(function() {
            init()
        }, 500)
    }) 
}
// create a funciton to initiate app
function init() {
    menuPrompt()
    .then(answer => {
        switch (answer.menuChoice) {
            case 'View All Employees':
                showEmployees()
                console.log('View All Employees')
                setTimeout(function() {
                    init()
                }, 500)
                break;
            case 'View All Employees By Department':
                showByDepartment()
                console.log('View All Employees By Department')
                setTimeout(function() {
                    init()
                }, 500)
                break;
            case 'View All Employee By Manager':
                showByManager()
                console.log('View All Employee By Manager')
                setTimeout(function() {
                    init()
                }, 500)
                break;
            case 'Add Employee': 
                askToAddEmployee()
                break;
            case 'Remove Employee':
                askToRemoveEmployee()
                break;
            case 'Update Employee':
                askToUpdateEmployee()
                break;
            case 'Update Employee Manager':
                console.log('Update Employee Manager')
                break;
            case 'View All Rols': 
                console.log('View All Rols')
                break;
            case 'Add Role':
                console.log('Add Role')
                break;
            case 'Remove Role':
                console.log('Remove Role')
                break;
            case 'View All Departments':
                console.log('View All Departments')
                break;
            case 'Remove Department':
                console.log('Remove Department')
                break;
            case 'View Total Utilized Buget By Department':
                console.log('View Total Utilized Buget By Department')
                break;
            case 'quit' :
                console.log('quit')
                break;
        }
    })
};



init();



