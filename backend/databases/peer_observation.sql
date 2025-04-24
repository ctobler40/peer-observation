drop database if exists peer_evaluation;
create database peer_evaluation;
use peer_evaluation;

-- Creating Tables
create table person (
	id int primary key auto_increment
);
create table observation (
	id int primary key auto_increment
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
create table tbd1 (
	id int primary key auto_increment
);
create table tbd2 (
	id int primary key auto_increment
);

-- Inserting Information
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
insert into tbd1 () values
	();
insert into tbd2 () values
	();