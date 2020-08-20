import React from 'react';

export const DarkModeSwitch = ({ isDarkThemeActive, toggleActiveTheme }) => (
  <>
    <div class="nav-link form-check form-switch pl-5">
      <label class="form-check-label" for="switch">Switch Mode</label>
      <input
        class="form-check-input"
        type="checkbox"
        id="slider"
        onChange={toggleActiveTheme}
        checked={isDarkThemeActive ? false : true} />
    </div>
  </>
);
