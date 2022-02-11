import { somelib } from '@nx-bug-2/somelib';
import './app.element.scss';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    this.innerHTML = somelib();
  }
}
customElements.define('nx-bug-2-root', AppElement);
