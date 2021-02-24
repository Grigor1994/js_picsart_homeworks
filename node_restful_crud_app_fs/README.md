*****How to work with this API*****

FOR EXAMPLE in POSTMAN

 GET METHODS
 
Search user by id
localhost:3000/api/v1/users/search/?id=1
Delete user by id 
localhost:3000/api/v1/users/delete/?id=1

Get all users
http://localhost:3000/api/v1/users


POST METHODS

Create new user 
http://localhost:3000/api/v1/users/create
select form type in postman 'x-www-form-urlencoded'
and fill next fields in body
as key and value for example:
`name      Grigor`,
`surname   Avetisyan`,
`email     example@gmail.com`,
`password  qwerty123456`,
NOTES! `id for user generated automaticaly`

Update user by Id
http://localhost:3000/api/v1/users/update

select form type in postman 'x-www-form-urlencoded'
and fill next fields in body
as key and value for example
`id` `select id which user you want change data` for example `id 1`
`name      Armen`,
`surname   Avetyan`,
`email     example@gmail.com`,
`password  qwerty123456`
