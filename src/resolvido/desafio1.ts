let employee = {
    code : 10,
    name : 'John'
};

class Employee {
    code: number;
    name: string;

    constructor (code: number, name: string) {
        this.code = code;
        this.name = name;
    }
}

let employee2 = new Employee(10, 'John');

interface IEmployee {
    code: number,
    name: string,
}

let employee3 = {code: 10, name: "John"} as IEmployee;

let employee4: IEmployee = {
    code: 10,
    name: "john",
}