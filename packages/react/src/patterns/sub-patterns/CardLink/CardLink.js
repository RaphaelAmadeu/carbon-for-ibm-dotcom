/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { ClickableTile, Tile } from 'carbon-components-react';
import classNames from 'classnames';
import { settings as ddsSettings } from '@carbon/ibmdotcom-utilities';
import { Image } from '../../../components/Image';
import PropTypes from 'prop-types';
import React from 'react';
import { settings } from 'carbon-components';

const { stablePrefix } = ddsSettings;
const { prefix } = settings;

/**
 * Card Link Component
 *
 * @param {object} props react proptypes
 * @returns {object} JSX object
 */
const CardLink = ({
  title,
  href,
  content,
  icon,
  image,
  className,
  type,
  ...props
}) => {
  if (!title || !href) {
    return null;
  }

  return type === 'link' ? (
    <ClickableTile
      data-autoid={`${stablePrefix}--card-link`}
      className={classNames(`${prefix}--card-link`, className)}
      href={href}
      {...props}>
      <Image {...image} />
      <div className={`${prefix}--card-link__wrapper`}>
        <h3 className={`${prefix}--card-link__title`}>{title}</h3>
        {optionalContent(content)}
        {renderFooter(icon)}
      </div>
    </ClickableTile>
  ) : (
    <Tile
      data-autoid={`${stablePrefix}--card-link`}
      className={classNames(`${prefix}--card-link`, className)}>
      <Image {...image} />
      <div className={`${prefix}--card-link__wrapper`}>
        <h3 className={`${prefix}--card-link__title`}>{title}</h3>
        {optionalContent(content)}
        {renderFooter(icon)}
      </div>
    </Tile>
  );
};

/**
 * Card Link optional content
 *
 * @param {string} content paragraph of text
 * @returns {object} JSX object
 */
function optionalContent(content) {
  return !content ? null : (
    <p className={`${prefix}--card-link__content`}>{content}</p>
  );
}

/**
 * Render footer with icon
 *
 * @param {object} icon passes in react icon
 * @returns {object} JSX object
 */
function renderFooter(icon) {
  return !icon ? null : (
    <footer className={`${prefix}--card-link__footer`}>{icon}</footer>
  );
}

CardLink.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.element,
  content: PropTypes.string,
  image: PropTypes.object,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default CardLink;
