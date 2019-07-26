// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class MyElement extends LitElement {
    static get properties() {
        return {
            message: String ,
            isChecked: Boolean
        };
    }

    constructor (){
        super();
        this.message = 'Hello World';
        // this.isChecked = true;
    }
  /**
   * Implement `render` to define a template for your element.
   *
   * You must provide an implementation of `render` for any element
   * that uses LitElement as a base class.
   */
  render(){
    /**
     * `render` must return a lit-html `TemplateResult`.
     *
     * To create a `TemplateResult`, tag a JavaScript template literal
     * with the `html` helper function:
     */
    return html`
      <!-- template content -->
      <input type="checkbox" ?checked="${this.isChecked}">${this.message}</input>
    `;
  }
}
// Register the new element with the browser.
customElements.define('my-element', MyElement);