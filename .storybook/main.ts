import type {StorybookConfig} from '@storybook/react/types';

const config: StorybookConfig = {
  "stories": [
    "../app/**/*.stories.mdx",
    "../app/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  }
}

module.exports = config;