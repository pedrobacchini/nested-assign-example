export class Person {

  firstName: string;
  lastName: string;

  get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}
