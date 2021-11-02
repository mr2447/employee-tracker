const db = require ('../db/connection');

//Show employees
const showEmployees = () => {
    const sql = `SELECT 
                  employees.first_name,
                  employees.last_name,
                  
                  CONCAT(employees.first_name, ' ', 
                  employees.last_name) AS 'Manager'

                  FROM employees
                  
                  INNER JOIN employees
                  ON employees.manager_id = employees.first_name`;
                
                
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