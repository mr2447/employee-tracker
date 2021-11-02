DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS managers;
DROP TABLE IF EXISTS departments;


CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR (30) NOT NULL,
    salary INTEGER NOT NULL,
    department_id INTEGER NOT NULL,
    INDEX department (department_id),
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE CASCADE
);

CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);
4

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER NOT NULL
    INDEX manager (manager_id),
    CONSTRAINT fk_manager KEY (manager_id) REFERENCES managers(id) ON DELETE SET NULL,
    INDEX role (role_id),
    CONSTRAINT fk_role FOREIGN KEY (role) REFERENCES roles(id) ON DELETE SET NULL
);

