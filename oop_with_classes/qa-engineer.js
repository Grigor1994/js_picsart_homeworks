const OfficeStaffer = require('./office-staffer');

class QaEngineer extends OfficeStaffer {
    constructor(name, surname, age,speciality, salary) {
        super(name, surname, age,speciality, salary);
    }

    doWork() {
        console.log('Testing software');
    }
    printInfo() {
        super.printInfo();
    }
}

module.exports = QaEngineer;