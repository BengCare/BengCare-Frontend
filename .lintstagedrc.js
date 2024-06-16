module.exports = {
  // Lint & Prettify TS and JS files
  '**/*.(ts|tsx|js)': () => [
    `yarn format:write`,
    `eslint . --fix`,
    `yarn typecheck`,
    `yarn lint:strict`,
  ],

  // Prettify only Markdown and JSON files
  '**/*.(md|json)': () => `yarn format:write`,
};
