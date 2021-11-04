const db = require ('../db/connection');

//Show employees
const showEmployees = () => {
    const sql = `SELECT 
                  employees.first_name,
                  employees.last_name,
                  
                  CONCAT(employees.last_name, ', ', 
                  employees.first_name) 
                  AS Manager,

                  employees.manager_id
                  AS 'Direct_report',

                  roles.salary
            
                  FROM employees

                  LEFT JOIN roles
                  ON employees.role_id = roles.id

                  INNER JOIN employees m
                  ON employees.manager_id = employees.id`;
                  
                  // INNER JOIN employees
                  // ON employees.manager_id = employees.id
                
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