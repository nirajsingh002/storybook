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
      "url": 'http://localhost:6007' 
    },
    "marketing": { 
      "title": "Marketing",
      "url": 'http://localhost:6008' 
    },
  }
}