// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

// Extend the LitElement base class
class SakaiPageHeader extends LitElement {

  static get properties () {
    return {
      headercontent: { type: String }
    };
  }
  static get styles () {
    return css`
      h1 {
        font-size: 3em;
        // color: var(--headerColor, blue);
      }
    `;
  }
  constructor () {
    super();
    this.headercontent = '';

  }

  attributeChangedCallback(name, oldval, newval) {
    console.log('attribute change: ', name, newval);
    super.attributeChangedCallback(name, oldval, newval);
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
      <!-- sakai-page-header template content -->
      <div class="page-header">
        <h1>${this.headercontent}</h1>
      </div>
    `;
  }
  // createRenderRoot () {
  //   // Use the light DOM instead of shadow dom
  //    return this;
  // }
}
// Register the new element with the browser.
customElements.define('sakai-page-header', SakaiPageHeader);

