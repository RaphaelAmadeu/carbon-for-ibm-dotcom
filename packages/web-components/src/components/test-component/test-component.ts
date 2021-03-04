/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { customElement, html, LitElement } from 'lit-element';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import { DDS_TEST_COMPONENT } from '../../globals/internal/feature-flags';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Test Component
 *
 */
@customElement(`${ddsPrefix}-test-component`)
class DDSTestComponent extends StableSelectorMixin(LitElement) {
  render() {
    return html`
      <div>
        <h1>Test component</h1>
        <slot></slot>
      </div>
    `;
  }
}

if (DDS_TEST_COMPONENT) {
  customElements.define(`${ddsPrefix}-test-component`, DDSTestComponent);
}

export default !DDS_TEST_COMPONENT ? undefined : DDSTestComponent;
