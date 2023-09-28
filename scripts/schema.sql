CREATE DATABASE jober_pre_task CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE jober_pre_task;

CREATE TABLE profile_card (
    id int auto_increment primary key,
    name varchar(255) not null,
    nickname varchar(255) not null,
    phone_number varchar(255) not null,
    email varchar(255),
    birth date,
    address varchar(255),
    gender bit(1),
    created_at timestamp default CURRENT_TIMESTAMP not null,
    updated_at timestamp default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP,
    deleted_at timestamp null
);

CREATE TABLE career (
    id int auto_increment primary key,
    user_id int not null,
    company_name varchar(255) not null,
    job varchar(255),
    FOREIGN KEY(user_id)
    REFERENCES profile_card(id) ON UPDATE CASCADE
);
