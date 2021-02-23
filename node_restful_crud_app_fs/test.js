

let Data = [
    {id_list: 2, name: 'John', token: '123123'},
    {id_list: 1, name: 'Nick', token: '312312'}
];


user = {
    "userArray": [
        {
            "id": 0,
            "name": "Arsen",
            "surname": "Markosyan",
            "email": "arsen123@gmail.com",
            "password": "qwerty123"
        },
        {
            "id": 1,
            "name": "Grigor",
            "surname": "Avetisyan",
            "email": "goqor94@mail.ru",
            "password": "qwerty123"
        }
    ]
};
let index;
for (let userKey of user.userArray) {
    if (userKey.id === 1) {
        index = user.userArray.indexOf(userKey);
    }
}


console.log(index)