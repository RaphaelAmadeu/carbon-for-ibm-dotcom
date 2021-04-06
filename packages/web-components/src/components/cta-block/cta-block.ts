/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, property, internalProperty, LitElement, customElement } from 'lit-element';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings.js';
import settings from 'carbon-components/es/globals/js/settings.js';
import styles from './cta-block.scss';

import DDSContentBlock from '../content-block/content-block';

const { prefix } = settings;
const { stablePrefix: ddsPrefix } = ddsSettings;

// TODO: Figure out how to define a mixin type supporting abstract class
/**
 * Content block.
 *
 * @slot heading - The heading content.
 * @slot copy - The copy content.
 * @slot media - The media content.
 * @slot footer - The footer (CTA) content.
 * @slot complementary - The complementary (aside) content.
 * @abstract
 */
@customElement(`${ddsPrefix}-cta-block`)
class DDSCtaBlock extends DDSContentBlock {
  render() {
    return html`
      ${super.render()}
      <slot slot="footer"></slot>
    `;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default DDSCtaBlock;
