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

//Show employees by department
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

                  ORDER BY d.department_name`;

  db.query(sql, (err, row) => {
    if (err) 
      {
        console.log({error: err.message})
        return;
      }
      console.table(row)
      
  });
}

//Show employees by manager 
const showByManager =() => {
  const sql = `SELECT 
                  e.first_name,
                  e.last_name,
                  
                  CONCAT(m.last_name, ', ', 
                  m.first_name) 
                  AS Manager

                  FROM employees AS e

                  LEFT JOIN roles AS r
                  ON r.id = e.role_id

                  LEFT JOIN departments AS d
                  ON d.id = r.department_id
                  
                  INNER JOIN employees AS m
                  ON e.manager_id = m.id
                  
                  ORDER BY Manager`;
  db.query(sql, (err, row) => {
    if (err) 
    {
      console.log({error: err.message})
      return;
    }
      console.table(row)
  });
}

//Add employee
const addEmployee = (answer) => {

const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
              VALUES (?, ?, ?, ?)
              `;

const params = [
                  answer.efirst_name,
                  answer.elast_name, 
                  answer.erole,
                  answer.mfirst_name
];

db.query(sql, params, (err, result) => {
  if(err) {
    console.log({error: err.message})
    return;
  }
  console.table(result)
});
}

//Remove employee
const removeEmployee = (answer) => {
  const sql = `DELETE FROM employees WHERE id = ?`;
  const params = [answer.id];

  db.query(sql, params, (err, result) => {
    if(err) {
      console.log({error: err.message})
      return;
    }
    console.table(result)
  })
}

//Update employee
const updateEmployee = (answer) => {
  const sql = `UPDATE employees SET role_id =?
                WHERE id = ?`;
  const params = [answer.role_id, answer.id];
  db.query(sql, params, (err, result) => {
    if(err) {
      console.log({error: err.message})
      return;
    }
    console.table(result)
  })

};

// Find All Roles
let roleArr = [];
const findAllRoles = () => {
  const sql = `SELECT * FROM roles`
  db.query(sql, (err, result) => {
    if(err) throw err;
    for (var i = 0; i < result.length; i++) {
     roleArr.push(result[i].title);
    }
    console.log('finished grabbing roleArr:', roleArr);
  })
    console.log('returning role array:', roleArr);
    return roleArr;
}

  


module.exports = 
{
  showEmployees,
  showByDepartment,
  showByManager,
  addEmployee,
  removeEmployee,
  updateEmployee,
  findAllRoles
};