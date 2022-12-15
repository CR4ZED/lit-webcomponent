import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('card-element')
export class Card extends LitElement {
  static styles = css`
    .card-wrapper {
      box-sizing: "border-box";
      border-radius: 5px;
      padding .75em;
      border: .5px solid black;
      font-family: 'sans-serif';
    }
    .card-wrapper h2 {
      border-bottom: .5px solid black;
    }
  `

  @property({attribute: false})
  article = {
    title: 'My First Web Component',
    text: 'In this example, the individual templates are defined as instance methods, so a subclass could extend this component and override one or more templates.'
  };

  render() {
    return html`
    <div class="card-wrapper">
    <h2 class="asdf">${this.article.title}</h2>
    <p>${this.article.text}</p>
    </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "card-element": Card;
  }
}