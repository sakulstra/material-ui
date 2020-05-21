module.exports = {
  stories: ['../stories/**/*.stories.(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-docs'],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
};
