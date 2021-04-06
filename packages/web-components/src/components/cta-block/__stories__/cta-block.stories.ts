/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { select } from '@storybook/addon-knobs';
import { html } from 'lit-element';
import ifNonNull from 'carbon-web-components/es/globals/directives/if-non-null.js';
import readme from './README.stories.mdx';
import textNullable from '../../../../.storybook/knob-text-nullable';

import '../../button/button';
import '../cta-block';
import '../cta-block-footer';
import '../../content-block/content-block-heading';
import '../../content-block/content-block-paragraph';
import '../../content-block/content-block';

export const Default = ({ parameters }) => {
  // const {  } = parameters?.props?.CTABlock ?? {};

  return html`
    <dds-cta-block>
      <dds-content-block-heading>Take the next step</dds-content-block-heading>
      <dds-content-block-paragraph>
        Want to discuss your option with a DevOps expert? <br />
        Contact our DevOps sales team to evaluate your needs.
      </dds-content-block-paragraph>
      <dds-button-expressive slot="footer" href="https://example.com">
        Book time with an expert
      </dds-button-expressive>

      <dds-cta-block-footer>
        heeey
      </dds-cta-block-footer>
    </dds-cta-block>
  `;
};

export default {
  title: 'Components/CTA Block',
  decorators: [
    (story, { parameters }) => html`
      <div class="dds-ce-demo-devenv--simple-grid ${parameters.gridContentClasses}">
        ${story()}
      </div>
    `,
  ],
  parameters: {
    hasGrid: true,
    gridContentClasses: 'dds-ce-demo-devenv--simple-grid--content-layout',
    hasVerticalSpacingInComponent: true,
    knobs: {
      CTABlock: ({ groupId }) => ({}),
    },
    ...readme.parameters,
  },
};
