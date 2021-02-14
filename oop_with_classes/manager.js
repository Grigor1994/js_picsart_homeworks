const OfficeStaffer = require('./office-staffer');

class Manager extends OfficeStaffer {
    constructor(name, surname, age,speciality, salary) {
        super(name, surname, age,speciality, salary);
    }

    doWork() {
        console.log('Shuffle papers,give orders');
    }
    printInfo() {
        super.printInfo();
    }
}

module.exports = Manager;