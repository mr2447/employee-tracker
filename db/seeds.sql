INSERT INTO departments (name)
VALUES 
('sales'),
('tech');

INSERT INTO roles (title, salary, department_id)
VALUES
('sales lead', '100000', '1'),
('junior', '200000', '2');

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
('James', 'Fraser', '1', '1');
