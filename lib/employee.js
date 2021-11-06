const db = require ('../db/connection');

//Show employees
const showEmployees = () => {
    const sql = `SELECT 
                  e.first_name,
                  e.last_name,
                            
                  r.salary, 
                  
                  d.department_name,

                  CONCAT(m.last_name, ', ', 
                  m.first_name) 
                  AS Manager
            
                  FROM employees AS e

                  LEFT JOIN roles AS r
                  ON r.id = e.role_id

                  LEFT JOIN departments AS d
                  ON d.id = r.department_id
                  
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

const showByDepartment =() => {
  const sql = `SELECT 
                  e.first_name,
                  e.last_name, 

                  d.department_name
    
                  FROM employees AS e

                  LEFT JOIN roles AS r
                  ON r.id = e.role_id

                  LEFT JOIN departments AS d
                  ON d.id = r.department_id

                  ORDER BY d.department_name
              `;
  const params = [data]

  db.query(sql, (err, row) => {
    if (err) 
      {
        console.log({error: err.message})
        return;
      }
      console.table(row)
  });
}


module.exports = 
{
  showEmployees,
  showByDepartment
};