const db = require ('../db/connection');

//Show employees
const showEmployees = () => {
    const sql = `SELECT * FROM employees`;

    db.query(sql, (err, rows) => {
        if (err) 
        {
          res.status(500).json({ error: err.message});
          return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
};

module.exports = showEmployees