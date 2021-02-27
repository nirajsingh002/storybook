import React from "react";
import PropTypes from "prop-types";
import "./menu-dropdown.css";

export const MenuDropdown = ({ MenuItems, toggleMenu, SubMenuItems, subMenuselected, ...props }) => {
const selectedClass = subMenuselected ? 'selectedItem' : '';
const toggleMainMenu = toggleMenu ? 'menuOpened' : 'test';
  const MainMenu = MenuItems.map((mainItem, index) => (
    <button className="dropbtn" key={index.toString()}>{mainItem}</button>
  ));
  const SubMenu = SubMenuItems.map((subItem, index) => (
    <a href="#" key={index.toString()} className={selectedClass}>
      {subItem}
    </a>
  ));
  return (
    <div className={`dropdown ${toggleMainMenu}`}>
      {MainMenu}
      <div className="dropdown-content">{SubMenu}</div>
    </div>
  );
};

MenuDropdown.propTypes = {
  /**
   * Menu Item text
   */
  MenuItems: PropTypes.array,
  /**
   * Menu Item toggle
   */
  toggleMenu: PropTypes.bool,
  /**
   * Sub-Menu Item text
   */
  SubMenuItems: PropTypes.array,
  /**
   * Sub-Menu Item toggle
   */
  subMenuselected: PropTypes.bool,
};


MenuDropdown.defaultProps = {
  MenuItems: ["Home"],
  toggleMainMenu: true,
  SubMenuItems: ["List 1", "List 2"],
  selected: false,
};
