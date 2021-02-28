module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  "refs": {
    "foundation": { 
      "title": "Foundation",
      "url": 'https://60393ba8f6e2d50023fa127c-lmmzfgjlmy.chromatic.com/?path=/story/molecules-dropdowns--menu-item'//'http://localhost:6007' 
    },
    "marketing": { 
      "title": "Marketing",
      "url": 'https://60393ba8f6e2d50023fa127c-wlfrldaane.chromatic.com/?path=/story/atoms-button--accordion-button'//'http://localhost:6008' 
    },
  }
}