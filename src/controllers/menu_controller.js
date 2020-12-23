import { Controller } from 'stimulus';

export default class extends Controller {
  connect() {
    console.log(`I'm the ${this.element.nodeName}`, this.element);
  }
}
