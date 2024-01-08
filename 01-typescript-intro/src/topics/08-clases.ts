export class Person {
    // public name: string;
    // private address: string;

    constructor(public name: string, public address: string = 'No address') {
        // this.name = name;
        // this.address = address;
    }

}

// export class Hero extends Person {
//     constructor(public alterEgo: string, public age: number, realName: string) {
//         super(realName, 'NY');
//     }
// }
export class Hero {

    // public person: Person;

    constructor(public alterEgo: string,
        public age: number,
        realName: string,
        public person: Person) {

        // this.person = new Person(realName);

    }
}


const tony = new Person('Tony Start', 'NY');
const ironman = new Hero('Ironman', 45, 'Tony', tony);

console.log(ironman);


// debemos priorizar la composición sobre la herencia
