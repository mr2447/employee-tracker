const {prompt} = require('inquirer');
const {showEmployees, showByDepartment }= require('./lib/employee')

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
}

//create a funciton to initiate app
function init() {
    menuPrompt()
    .then(answer => {
        switch (answer.menuChoice) {
            case 'View All Employees':
                showEmployees()
                console.log('View All Employees')
                break;
            case 'View All Employees By Department':
                showByDepartment()
                console.log('View All Employees By Department')
                break;
            case 'View All Employee By Manager':
                console.log('View All Employee By Manager')
                break;
            case 'Add Employee': 
                console.log('Add Employee')
                break;
            case 'Remoe Employee':
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
}



init();


