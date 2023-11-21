"use strict";
let c = {
    firstName: 'john',
    lastName: 'barrowman'
};
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
c = new Person('matt', 'smith');
console.log(c.firstName);
//# sourceMappingURL=index.js.map