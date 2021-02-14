const OfficeStaffer = require('./office-staffer');

class Receptionist extends OfficeStaffer {
    constructor(name, surname, age,speciality, salary) {
        super(name, surname, age,speciality, salary);
    }

    doWork() {
        console.log('Answer telephone,greet visitors');
    }
    printInfo() {
        super.printInfo();
    }
}

module.exports = Receptionist;