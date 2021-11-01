const {prompt} = require('inquirer');
const { inherits } = require('util');

const menuPrompt = () => {
    return prompt ([
        {
            type: 'list',
            name: 'choices',
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
                'REemove Department',
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
    .then(menuChoice)
    if(menuChoice === View All Employees) {
        
    }
}


init();