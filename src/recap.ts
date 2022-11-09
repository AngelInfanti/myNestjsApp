const myName = 'Nicolas';
const myAge = 15;
const suma = (a: number, b: number) => {
  return a + b;
};
suma(12, 23);

class Persona {
  constructor(private age: number, private name: string) {}

  getSummary() {
    return `my name is ${this.name}, ${this.age}`;
  }
}

const angel = new Persona(15, 'Angel');
angel.getSummary();
