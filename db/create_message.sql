insert into messages
(user_id, message)
values ($1, $2);

select m.id, m.user_id, m.message, u.name from messages m
join users u 
on m.user_id = u.id
order by m.id asc;