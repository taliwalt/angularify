import faker from 'faker';

export default class RandomName {
  getName() {
    this.name = faker.name.findName();
    return this.name;
  }
}
