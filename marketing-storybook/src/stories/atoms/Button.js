import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ ...props }) => {
  const { backgroundColor, accordionClassName, label, isActive, isDisabled} = props
  const accordionClass = accordionClassName ? accordionClassName : '';
  const toggleAccordion = isActive ? 'active' : '';
  const disabledAccordion = isDisabled ? 'disabled' : '';
  return (
    <button
      type="button"
      className={['storybook-button storybook-button--accordion arrow down', accordionClass, toggleAccordion, disabledAccordion].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * accordionClassName
   */
  accordionClassName: PropTypes.string,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Toggle state opened/closed
   */
  isActive: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  isActive: false,
};
