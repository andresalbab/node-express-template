# Node.js Express API boilerplate project

Ready to use project with ES6+ babel compilation, ESlint + Prettier config, Jest test framework and hot reloading. `PORT` EV is required and should be defined in a `config/{dev | test}.env` file.

## VS Code Setup

Preferred IDE is Visual Studio Code, where ESlint and Prettier extensions should be installed and enable. Furthermore, the following settings should be defined:

```js
{
  ...
  "editor.formatOnSave": true,
  "files.autoSave": "onWindowChange",
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true,
}
```
