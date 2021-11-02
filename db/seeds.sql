INSERT INTO departments (name)
VALUES 
('tech'),
('music');

INSERT INTO roles (title, salary, department_id)
VALUES
('sales', '100000', '1'),
('web-dev', '200000', '1');

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
('James', 'Fraser', '1', '1');
