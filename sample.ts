// Mix classes & .create()

import Ember from "ember";

// Try mixing and matching usage of each classlike entity
// by adding/removing a 'C' from the end of the variable.
// Play around with the hierarchy. Let me know what breaks.

export class PersonC extends Ember.Object {
    constructor(public name: string) {
        super();
        this.get('name')
    }
}

export class ProgrammerC extends PersonC {
    constructor(name: string, public weaponOfChoice: string) {
        super(name);
    }
    explain() {
        let name = this.get('name');
        let secretWeapon = this.get('weaponOfChoice');

        console.log("Hello, my name is " + name + "and I use " + secretWeapon);
    }
}

new ProgrammerC("Tom", "Array#filter");

export let MyReduxProgrammerC = ProgrammerC.create({
    weaponOfChoice: 'Array#filter'
})

// General .extend model

let Person = Ember.Object.extend({
    name: '',
});

let Programmer = Person.extend({
    weaponOfChoice: '',
    explain() {
        // Woah, look at this sweet error-checking for naem!
        let name = this.get('naem');
        let secretWeapon = this.get('weaponOfChoice');

        console.log("Hello, my name is " + name + "and I use " + secretWeapon);
    },
});

export let MyReduxProgrammer = Programmer.create({
    name: null! as Date,
    weaponOfChoice: 'Array#filter'
})

MyReduxProgrammer.explain();

//    request               |
//  completions             |
//     here!                |
//                          v
MyReduxProgrammer.get('weapo')