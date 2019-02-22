insert into users
(name, password)
values($1, $2);

select *
from users
where name = $1
and password = $2;

