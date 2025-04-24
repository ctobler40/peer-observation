drop database if exists peer_evaluation;
create database peer_evaluation;
use peer_evaluation;

-- Creating Tables
create table position (
	id int primary key auto_increment,
    pos_name varchar(20) not null
);
create table person (
	id int primary key auto_increment,
    first_name varchar(20) not null,
    last_name varchar(20) not null,
    email varchar(30) not null,
    position_id int not null,
	constraint po_person_position_id
		foreign key (role_id)
		references position(id)
);
create table observation (
	id int primary key auto_increment,
    obs_date datetime not null,
    observer_id int not null,
	constraint po_observation_person_id
		foreign key (observer_id)
		references person(id)
);
create table message (
	id int primary key auto_increment
);
create table connect (
	id int primary key auto_increment
);
create table invite (
	id int primary key auto_increment
);
create table feedback (
	id int primary key auto_increment
);
create table tbd2 (
	id int primary key auto_increment
);

-- Inserting Information
insert into position () values
	();
insert into person () values
	();
insert into observation () values
	();
insert into message () values
	();
insert into connect () values
	();
insert into invite () values
	();
insert into feedback () values
	();
insert into tbd2 () values
	();