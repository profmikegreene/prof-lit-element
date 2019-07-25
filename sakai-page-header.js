// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

// Extend the LitElement base class
class SakaiPageHeader extends LitElement {

  static get properties () {
    return {
      headerContent: { type: String }
    };
  }
  static get styles () {
    return css`
      :host {
        font-size: 3em;
        color: var(--headerColor, black);
      }
    `;
  }
  constructor () {
    super();
    this.headerContent = 'Loading';
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
        <h1>${this.headerContent}</h1>
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

