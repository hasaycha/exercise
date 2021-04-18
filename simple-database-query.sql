select
    u.id as ID,
    u.username as UserName,
    p.username as ParentUserName
FROM
    "user" u
        left JOIN "user" p ON u.parent = p.id
order by id
