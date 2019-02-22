select *
from users
where name = $1
and password = $2;