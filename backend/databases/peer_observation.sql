drop database if exists peer_evaluation;
create database peer_evaluation;
use peer_evaluation;

-- Creating Tables
-- role will represent the current role of each person.
-- i.e. TA, Student, Teacher, etc.
create table role (
	id int primary key auto_increment,
    role_name varchar(20) not null
);
-- person will represent all of the users in our database
create table person (
	id int primary key auto_increment,
    first_name varchar(20) not null,
    last_name varchar(20) not null,
    email varchar(30) not null,
    role_id int not null,
	constraint po_person_role_id
		foreign key (role_id)
		references role(id)
);
-- observation will represent all of our schedules and appointments for observations of each other
create table observation (
	id int primary key auto_increment,
    obs_date datetime not null,
    person_id int not null,
	constraint po_observation_person_id
		foreign key (person_id)
		references person(id)
);
-- message will represent the messaging between various users
create table message (
	id int primary key auto_increment,
    text_message varchar(200) not null,
    message_date datetime not null,
    sender_id int not null,
    reciever_id int not null,
	constraint po_message_sender_id
		foreign key (sender_id)
		references person(id),
	constraint po_message_reciever_id
		foreign key (reciever_id)
		references person(id)
);
-- connect will represent our invites and connection requests between users across the site
create table connect (
	id int primary key auto_increment,
    connect_status varchar(10) not null,    -- 'Accepted', 'Denied', or 'Pending'
    time_requested datetime not null,
    person_id int not null,
	constraint po_connect_person_id
		foreign key (person_id)
		references person(id)
);
-- feedback will represent all the feedback and info we get from others
create table feedback (
	id int primary key auto_increment,
    feedback varchar(300) not null,
    time_sent datetime not null,
    person_id int not null,
	constraint po_feedback_person_id
		foreign key (person_id)
		references person(id)
);

-- Inserting Information
insert into role (role_name) values
	('TA'),
    ('Professor'),
    ('Student');
insert into person (first_name, last_name, email, role_id) values
	('John', 'Smith', 'john.smith@example.com', 1),
	('Jane', 'Doe', 'jane.doe@example.com', 2),
	('Alice', 'Brown', 'alice.brown@example.com', 3),
	('Bob', 'Davis', 'bob.davis@example.com', 1),
	('Charlie', 'Evans', 'charlie.evans@example.com', 2),
	('Dana', 'White', 'dana.white@example.com', 3),
	('Evan', 'Scott', 'evan.scott@example.com', 1),
	('Fiona', 'Hall', 'fiona.hall@example.com', 2),
	('George', 'Young', 'george.young@example.com', 3),
	('Hannah', 'King', 'hannah.king@example.com', 1),
	('Ian', 'Wright', 'ian.wright@example.com', 2),
	('Jackie', 'Lopez', 'jackie.lopez@example.com', 3),
	('Kevin', 'Hill', 'kevin.hill@example.com', 1),
	('Laura', 'Green', 'laura.green@example.com', 2),
	('Mike', 'Adams', 'mike.adams@example.com', 3),
	('Nina', 'Nelson', 'nina.nelson@example.com', 1),
	('Oscar', 'Carter', 'oscar.carter@example.com', 2),
	('Paula', 'Mitchell', 'paula.mitchell@example.com', 3),
	('Quincy', 'Perez', 'quincy.perez@example.com', 1),
	('Rachel', 'Roberts', 'rachel.roberts@example.com', 2),
	('Sam', 'Turner', 'sam.turner@example.com', 3),
	('Tina', 'Phillips', 'tina.phillips@example.com', 1),
	('Uma', 'Campbell', 'uma.campbell@example.com', 2),
	('Victor', 'Parker', 'victor.parker@example.com', 3),
	('Wendy', 'Edwards', 'wendy.edwards@example.com', 1),
	('Xander', 'Collins', 'xander.collins@example.com', 2),
	('Yara', 'Stewart', 'yara.stewart@example.com', 3),
	('Zane', 'Sanchez', 'zane.sanchez@example.com', 1),
	('Amy', 'Morris', 'amy.morris@example.com', 2),
	('Brian', 'Rogers', 'brian.rogers@example.com', 3),
	('Cathy', 'Reed', 'cathy.reed@example.com', 1),
	('Derek', 'Cook', 'derek.cook@example.com', 2),
	('Ella', 'Morgan', 'ella.morgan@example.com', 3),
	('Frank', 'Bell', 'frank.bell@example.com', 1),
	('Gina', 'Murphy', 'gina.murphy@example.com', 2),
	('Harold', 'Bailey', 'harold.bailey@example.com', 3),
	('Isla', 'Rivera', 'isla.rivera@example.com', 1),
	('Jake', 'Cooper', 'jake.cooper@example.com', 2),
	('Kara', 'Richardson', 'kara.richardson@example.com', 3),
	('Liam', 'Cox', 'liam.cox@example.com', 1),
	('Maya', 'Howard', 'maya.howard@example.com', 2),
	('Noah', 'Ward', 'noah.ward@example.com', 3),
	('Olive', 'Torres', 'olive.torres@example.com', 1),
	('Pete', 'Peterson', 'pete.peterson@example.com', 2),
	('Queenie', 'Gray', 'queenie.gray@example.com', 3),
	('Ron', 'Ramirez', 'ron.ramirez@example.com', 1),
	('Sara', 'James', 'sara.james@example.com', 2),
	('Tom', 'Watson', 'tom.watson@example.com', 3),
	('Ulysses', 'Brooks', 'ulysses.brooks@example.com', 1),
	('Vera', 'Kelly', 'vera.kelly@example.com', 2);
    
insert into observation (obs_date, person_id) values
	('2024-05-01 09:00:00', 1),
	('2024-05-02 10:00:00', 2),
	('2024-05-03 11:00:00', 3),
	('2024-05-04 12:00:00', 4),
	('2024-05-05 13:00:00', 5),
	('2024-05-06 14:00:00', 6),
	('2024-05-07 09:00:00', 7),
	('2024-05-08 10:00:00', 8),
	('2024-05-09 11:00:00', 9),
	('2024-05-10 12:00:00', 10),
	('2024-05-11 13:00:00', 11),
	('2024-05-12 14:00:00', 12),
	('2024-05-13 09:00:00', 13),
	('2024-05-14 10:00:00', 14),
	('2024-05-15 11:00:00', 15),
	('2024-05-16 12:00:00', 16),
	('2024-05-17 13:00:00', 17),
	('2024-05-18 14:00:00', 18),
	('2024-05-19 09:00:00', 19),
	('2024-05-20 10:00:00', 20),
	('2024-05-21 11:00:00', 21),
	('2024-05-22 12:00:00', 22),
	('2024-05-23 13:00:00', 23),
	('2024-05-24 14:00:00', 24),
	('2024-05-25 09:00:00', 25);

insert into message (text_message, message_date, sender_id, reciever_id) values
	('Hey, how are you?', '2024-05-01 08:00:00', 1, 2),
	('Please review my assignment.', '2024-05-01 09:30:00', 2, 3),
	('Meeting rescheduled.', '2024-05-02 10:30:00', 3, 4),
	('Can you send the report?', '2024-05-03 11:30:00', 4, 5),
	('Thanks for the feedback.', '2024-05-04 12:30:00', 5, 6),
	('Need help with homework.', '2024-05-05 13:30:00', 6, 7),
	('Good job on the project.', '2024-05-06 14:30:00', 7, 8),
	('Lunch meeting at noon?', '2024-05-07 09:15:00', 8, 9),
	('See you at the lecture.', '2024-05-08 10:45:00', 9, 10),
	('Assignment due Friday.', '2024-05-09 11:45:00', 10, 11),
	('Study group tonight.', '2024-05-10 12:45:00', 11, 12),
	('Do you have notes?', '2024-05-11 13:45:00', 12, 13),
	('Project is almost done.', '2024-05-12 14:45:00', 13, 14),
	('Can we meet tomorrow?', '2024-05-13 15:45:00', 14, 15),
	('Presentation next week.', '2024-05-14 16:45:00', 15, 16),
	('Great work yesterday.', '2024-05-15 08:00:00', 16, 17),
	('Any updates on task?', '2024-05-16 09:30:00', 17, 18),
	('Let’s sync later.', '2024-05-17 10:30:00', 18, 19),
	('Check your email.', '2024-05-18 11:30:00', 19, 20),
	('Upload the files.', '2024-05-19 12:30:00', 20, 21),
	('Document is finalized.', '2024-05-20 13:30:00', 21, 22),
	('Meeting minutes attached.', '2024-05-21 14:30:00', 22, 23),
	('Please review slides.', '2024-05-22 15:30:00', 23, 24),
	('Draft ready for submission.', '2024-05-23 16:30:00', 24, 25),
	('Congratulations!', '2024-05-24 17:30:00', 25, 1);

insert into connect (connect_status, time_requested, person_id) values
	('Accepted', '2024-05-01 09:00:00', 1),
	('Pending', '2024-05-02 10:00:00', 2),
	('Denied', '2024-05-03 11:00:00', 3),
	('Accepted', '2024-05-04 12:00:00', 4),
	('Pending', '2024-05-05 13:00:00', 5),
	('Denied', '2024-05-06 14:00:00', 6),
	('Accepted', '2024-05-07 09:00:00', 7),
	('Pending', '2024-05-08 10:00:00', 8),
	('Accepted', '2024-05-09 11:00:00', 9),
	('Denied', '2024-05-10 12:00:00', 10),
	('Accepted', '2024-05-11 13:00:00', 11),
	('Pending', '2024-05-12 14:00:00', 12),
	('Accepted', '2024-05-13 09:00:00', 13),
	('Denied', '2024-05-14 10:00:00', 14),
	('Accepted', '2024-05-15 11:00:00', 15),
	('Pending', '2024-05-16 12:00:00', 16),
	('Accepted', '2024-05-17 13:00:00', 17),
	('Denied', '2024-05-18 14:00:00', 18),
	('Pending', '2024-05-19 09:00:00', 19),
	('Accepted', '2024-05-20 10:00:00', 20),
	('Denied', '2024-05-21 11:00:00', 21),
	('Pending', '2024-05-22 12:00:00', 22),
	('Accepted', '2024-05-23 13:00:00', 23),
	('Denied', '2024-05-24 14:00:00', 24),
	('Accepted', '2024-05-25 09:00:00', 25);

insert into feedback (feedback, time_sent, person_id) values
	('Excellent work on project!', '2024-05-01 08:00:00', 1),
	('Needs improvement on assignments.', '2024-05-02 09:00:00', 2),
	('Very punctual and organized.', '2024-05-03 10:00:00', 3),
	('Good team player.', '2024-05-04 11:00:00', 4),
	('Could participate more.', '2024-05-05 12:00:00', 5),
	('Excellent communication skills.', '2024-05-06 13:00:00', 6),
	('Leadership qualities evident.', '2024-05-07 14:00:00', 7),
	('Needs to meet deadlines.', '2024-05-08 08:00:00', 8),
	('Creative solutions provided.', '2024-05-09 09:00:00', 9),
	('Always helpful to others.', '2024-05-10 10:00:00', 10),
	('Fantastic presentation skills.', '2024-05-11 11:00:00', 11),
	('Solid analytical thinking.', '2024-05-12 12:00:00', 12),
	('Could be more proactive.', '2024-05-13 13:00:00', 13),
	('Shows consistent improvement.', '2024-05-14 14:00:00', 14),
	('A joy to work with.', '2024-05-15 08:00:00', 15),
	('Detail-oriented and precise.', '2024-05-16 09:00:00', 16),
	('Takes feedback seriously.', '2024-05-17 10:00:00', 17),
	('Excellent collaborative spirit.', '2024-05-18 11:00:00', 18),
	('Needs to speak up more.', '2024-05-19 12:00:00', 19),
	('Reliable team member.', '2024-05-20 13:00:00', 20),
	('Fantastic project manager.', '2024-05-21 14:00:00', 21),
	('Brings great ideas to the table.', '2024-05-22 08:00:00', 22),
	('Motivated and determined.', '2024-05-23 09:00:00', 23),
	('Could use better time management.', '2024-05-24 10:00:00', 24),
	('Impressive coding skills.', '2024-05-25 11:00:00', 25),
	('Outstanding leadership.', '2024-05-26 12:00:00', 26),
	('Struggles with deadlines.', '2024-05-27 13:00:00', 27),
	('Good attention to detail.', '2024-05-28 14:00:00', 28),
	('Always willing to learn.', '2024-05-29 08:00:00', 29),
	('Shows empathy to teammates.', '2024-05-30 09:00:00', 30),
	('Exemplary behavior.', '2024-05-31 10:00:00', 31),
	('Best communicator in the group.', '2024-06-01 11:00:00', 32),
	('Innovative ideas presented.', '2024-06-02 12:00:00', 33),
	('Could participate more.', '2024-06-03 13:00:00', 34),
	('Top performer.', '2024-06-04 14:00:00', 35),
	('Pleasure to work with.', '2024-06-05 08:00:00', 36),
	('High initiative.', '2024-06-06 09:00:00', 37),
	('Outstanding critical thinking.', '2024-06-07 10:00:00', 38),
	('Calm under pressure.', '2024-06-08 11:00:00', 39),
	('Provides thorough solutions.', '2024-06-09 12:00:00', 40),
	('Need to participate in discussions.', '2024-06-10 13:00:00', 41),
	('Always respectful.', '2024-06-11 14:00:00', 42),
	('Excels in group projects.', '2024-06-12 08:00:00', 43),
	('Can manage workload better.', '2024-06-13 09:00:00', 44),
	('Highly self-motivated.', '2024-06-14 10:00:00', 45),
	('Supportive team member.', '2024-06-15 11:00:00', 46),
	('Works well under deadlines.', '2024-06-16 12:00:00', 47),
	('Outstanding mentor.', '2024-06-17 13:00:00', 48),
	('Exceptional commitment.', '2024-06-18 14:00:00', 49),
	('Bright future ahead.', '2024-06-19 08:00:00', 50);
    
select * from role;
select * from person;
select * from observation;
select * from message;
select * from connect;
select * from feedback;