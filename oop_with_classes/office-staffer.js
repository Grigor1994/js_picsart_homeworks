class OfficeStaffer {
    constructor(name, surname, age, speciality, salary) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.speciality = speciality;
        this.salary = salary;
    }

    doWork() {
        console.log('Do some work');
    }

    printInfo() {
        console.log(`Name: ${this.name},Surname: ${this.surname},Age: ${this.age},Speciality: ${this.speciality},Salary: ${this.salary}$`)
    }
}

module.exports = OfficeStaffer;