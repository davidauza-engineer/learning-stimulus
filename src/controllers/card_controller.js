import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ['name'];

  greet(event) {
    event.preventDefault();
    const name = this.nameTarget.value;
    console.log(`Hello, ${name}`);
  }

  connect() {
    console.log(`I'm the ${this.element.nodeName}`, this.element);
  }
}
