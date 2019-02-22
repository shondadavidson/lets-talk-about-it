select m.id, m.user_id, m.message, u.name, u.password from messages m
join users u 
on m.user_id = u.id
where m.id = $1
order by m.id asc;