/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, property, customElement } from 'lit-element';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings.js';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import DDSContentItemHeading from '../content-item/content-item-heading';
import styles from './cta-section.scss';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * The heading content in content item.
 *
 * @element dds-cta-section-item-heading
 */
@customElement(`${ddsPrefix}-cta-section-item-heading`)
class DDSCTASectionItemHeading extends StableSelectorMixin(DDSContentItemHeading) {
  /**
   * The shadow slot this logo UI should be in.
   */
  @property({ reflect: true })
  slot = 'heading';

  connectedCallback() {
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'heading');
    }
    if (!this.hasAttribute('aria-level')) {
      this.setAttribute('aria-level', '4');
    }
    super.connectedCallback();
  }

  render() {
    return html`
      <slot></slot>
    `;
  }

  static get stableSelector() {
    return `${ddsPrefix}--cta-section-item__heading`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default DDSCTASectionItemHeading;
