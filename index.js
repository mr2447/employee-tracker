const {prompt} = require('inquirer');
const {showEmployees, showByDepartment, showByManager, addEmployee}= require('./lib/employee')

//inquirer to do
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
                'Remoe Employee',
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

//inquirer add employee
const askToAddEmployee = () => {
    return prompt ([
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
        },
        {
            type: 'input',
            name: 'erole',
            message: "What is the employee's role? ",
            validate: answer => {
                if(answer) {
                    return true;
                } else {
                    console.log('Please enter a role.');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'mfirst_name',
            message: "What is the FIRST name of the employee's manager?",
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
            name: 'mlast_name',
            message: "What is the LAST name of the employee's manager?",
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
    .then(answer => {
        console.log(answer)
        addEmployee(answer)
        setTimeout(function() {
            init()
        }, 500)
    });  
};

//create a funciton to initiate app
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
                console.log('Remoe Employee')
                break;
            case 'Update Employee':
                console.log('Update Employee')
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



