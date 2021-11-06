INSERT INTO departments (department_name)
VALUES 
('sales'),
('tech');

INSERT INTO roles (title, salary, department_id)
VALUES
('sales lead', '100000', '1'),
('junior tech', '200000', '2');

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
('James', 'Fraser', '1', '1'),
('Marvin', 'Ren', '2', '1'),
('Alice', 'Ma', '1','2'),
('Ben', 'Wang', '1','2'),
('Henrich', 'Schenker', '1','1');
