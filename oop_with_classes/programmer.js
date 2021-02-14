const OfficeStaffer = require('./office-staffer');

class Programmer extends OfficeStaffer {
    constructor(name, surname, age,speciality, salary) {
        super(name, surname, age,speciality, salary);
    }

    doWork() {
        console.log('Solve technical problems,write software');
    }
    printInfo() {
        super.printInfo();
    }
}

module.exports = Programmer;