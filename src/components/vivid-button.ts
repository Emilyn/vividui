import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("vivid-button")
export class VividButton extends LitElement {
  /**
   * Button Name
   */
  @property({ type: String })
  name = "Click on the Vite and Lit logos to learn more";

  render() {
    return html`
      <button @click=${this._onClick} part="button">${this.name}</button>
    `;
  }

  private _onClick() {
    console.log("clicked");
    let myEvent = new CustomEvent("btn-clicked", {
      detail: { message: "btn-clicked happened." },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(myEvent);
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "vivid-button": VividButton;
  }
}
