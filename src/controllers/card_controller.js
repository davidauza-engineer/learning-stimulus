import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ['name'];

  initialize() {
    const name = document.querySelector('.card-title').getAttribute('data-name');

    if (this.titleName === null) {
      this.readName(name);
    } else {
      this.readName(this.titleName);
    }
  }

  get titleName() {
    return this.data.get('name');
  }

  set titleName(value) {
    this.data.set('name', value);
  }

  greet(event) {
    event.preventDefault();
    const name = this.nameTarget.value;
    console.log(`Hello, ${name}`);
    this.titleName = name;
    
    this.readName(this.titleName);
  }

  connect() {
    console.log(`I'm the ${this.element.nodeName}`, this.element);
  }

  readName(name) {
    const cardName = document.querySelector('.card-title');
    cardName.textContent = name;
  }
}
