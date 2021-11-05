const db = require ('../db/connection');

//Show employees
const showEmployees = () => {
    const sql = `SELECT 
                  e.first_name,
                  e.last_name,
                            
                  roles.salary, 
                  
                  departments.name
                  AS Department,

                  CONCAT(m.last_name, ', ', 
                  m.first_name) 
                  AS Manager
            
                  FROM employees AS e

                  LEFT JOIN departments
                  ON roles.department_id = departments.id

                  LEFT JOIN roles
                  ON e.role_id = roles.id
    
                  INNER JOIN employees AS m
                  ON e.manager_id = m.id`;
                
    db.query(sql, (err, row) => {
        if (err) 
        {
          console.log({error: err.message})
          return;
        }
        console.table(row)
    });
};


module.exports = showEmployees