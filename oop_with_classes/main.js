// imports
const Manager = require('./manager');
const Receptionist = require('./receptionist');
const QaEngineer = require('./qa-engineer');
const Programmer = require('./programmer');

const manager = new Manager('Anna', 'Avetyan', 23, 'manager', 700);
manager.printInfo();
manager.doWork();

console.log();

const receptionist = new Receptionist('Lilit', 'Hakobyan', 34, 'receptionist', 500);
receptionist.printInfo();
receptionist.doWork();

console.log();

const qaEngineer = new QaEngineer('Gor', 'Sahakyan', 33, 'Qa Engineer', 800);
qaEngineer.printInfo();
qaEngineer.doWork();

console.log();

const programmer = new Programmer('Erik', 'Amiryan', 25, 'programmer', 1800);
programmer.printInfo();
programmer.doWork();