function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype.showInfo = function () {
    console.log(`Full name: ${this.firstName} ${this.lastName},age: ${this.age}`);
}

module.exports = Person;
