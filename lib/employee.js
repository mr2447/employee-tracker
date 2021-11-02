const db = require ('../db/connection');

//Show employees
const showEmployees = () => {
    const sql = `SELECT
                employees.first_name,
                employees.last_name,
                
                roles.title
                AS role_title,

                departments.name
                AS department,

                roles.salary
                AS role_salary
                
                FROM employees
                
                LEFT JOIN roles
                ON employees.role_id = roles.id

                LEFT JOIN departments
                ON roles.id = departments.id
                `;

    db.query(sql, (err, row) => {
        if (err) 
        {
          console.log({error: err.message})
          return;
        }
        console.table(row)
    });
};

//

module.exports = showEmployees