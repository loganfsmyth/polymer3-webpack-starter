import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import '@vaadin/vaadin-material-styles/color.js';
import '@vaadin/vaadin-material-styles/typography.js';

const inject = template => document.head.appendChild(template.content);

inject(html`
  <custom-style>
    <style include="material-typography">
    </style>
  </custom-style>
`);

inject(html`<dom-module id="shared-styles">
  <template>
    <style include="material-color-light material-typography">
      h2 {
        margin: var(--lumo-space-m) 0;
      }
      .card {
        margin: var(--lumo-space-m);
        padding: var(--lumo-space-m);
        border-radius: var(--lumo-border-radius);
        background: var(--lumo-base-color);
        box-shadow: var(--lumo-box-shadow-s);
      }
    </style>
  </template>
</dom-module>`);
