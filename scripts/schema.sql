CREATE DATABASE jober_pre_task CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE jober_pre_task;

CREATE TABLE profile_card (
    id int auto_increment primary key,
    name varchar(255) not null,
    nickname varchar(255),
    phone_number varchar(255),
    email varchar(255),
    birth date,
    address varchar(255),
    gender varchar(255),
    created_at timestamp default CURRENT_TIMESTAMP not null,
    updated_at timestamp default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP,
    deleted_at timestamp null
);

CREATE TABLE career (
    id int auto_increment primary key,
    user_id int not null,
    company_name varchar(255) not null,
    job varchar(255),
    join_date DATE,
    quit_date DATE,
    created_at timestamp default CURRENT_TIMESTAMP not null,
    updated_at timestamp default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP,
    deleted_at timestamp null,
    CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES jober_pre_task.profile_card(id)
);
