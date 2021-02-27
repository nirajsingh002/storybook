import React from "react";
import PropTypes from "prop-types";
import "./radio-button.css";

/**
 * Primary UI component for user interaction
 */
export const Radio = ({ label, checked, ...props }) => {
  const mode = checked ? "checked" : "unchecked";
  return (
    <div>
      <input
        type="radio"
        className={["storybook-button", `storybook-button--${1}`, mode].join(
          " "
        )}
        name="radio-group"
        checked={checked}
        value="Male"
        {...props}

      />
      <label for="test1">{label}</label>
      </div>
  );
};

Radio.propTypes = {
  /**
   * Radio Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Is this the principal call to action on the page?
   */
  checked: PropTypes.bool,
  /**
   * Optional click handler
   */
  onChange: PropTypes.func,
};

Radio.defaultProps = {
  checked: false,
  onChange: undefined,
};
