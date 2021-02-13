const Person = require('./person.js');
const Photo = require('./photo.js');

function User(firstName, lastName, age, id, email, password) {
    Person.call(this, firstName, lastName, age);
    this.id = id;
    this.email = email;
    this.password = password;
}

User.prototype = Object.create(Person.prototype);
User.prototype.constructor = User;

User.prototype.showInfo = function () {
    Person.prototype.showInfo.call(this);
    console.log(`Email: ${this.email}, Password: ${this.password}`);
}

User.prototype.addPhoto = function (id, name, size, type, description) {
    const photo = new Photo(id,name,size,type,description);
    photo.photoInfo()
}

const user = new User('Grigor', 'Avetisyan', 24, 312, 'grigor94@gmail.com', 'qwerty123');
user.showInfo();
user.addPhoto(12,'nature',3245,'JPG','Nature wild');