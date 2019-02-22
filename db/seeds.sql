create table messages 
(
    id serial primary key,
    user_id integer,
    message text
)

create table users
(
    id serial primary key,
    name varchar(255),
    password varchar(30)
)

insert into users
(name, password)
values('Hunter', 'password'),
      ('Clayton', 'cantdance');

insert into messages
(user_id, message)
values(1, 'What up Clay?'),
      (2. 'Not much man. Just chilllllinnnn!');

select * from messages m
join users u 
on m.user_id = u.id;

