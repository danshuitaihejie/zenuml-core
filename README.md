> Note: This repository has been renamed to `core` from `vue-sequence`. This is repository contains the core renderer and other core functionalities including
export images.

# ZenUML/Core
ZenUML is JavaScript-based diagramming tool that uses Markdown-inspired text definitions
and a renderer to create and modify sequence diagrams. The main purpose of ZenUML is to
help documentation catch up with development.

ZenUML allows even non-programmers to easily create beautiful sequence diagrams through
the [ZenUML Live Editor](https://app.zenuml.com).

You can use it ZenUML on your favorite platforms and applications:
* [Confluence](https://marketplace.atlassian.com/apps/1218380/zenuml-diagrams-for-confluence-freemium?hosting=cloud&tab=overview)
* [Web App](https://www.zenuml.com/)
* [JetBrains Plugin](https://plugins.jetbrains.com/plugin/12437-zenuml-support)
* [Chrome Extension](https://chrome.google.com/webstore/detail/zenuml-sequence/kcpganeflmhffnlofpdmcjklmdpbbmef)

# Development

## TODOs
- [x] Rename this repository to 'core' 
- [ ] and rename the package to @zenuml/core

````
yarn install
yarn start
````

## CI/CD
CI/CD is done with GitHub Actions. The workflow is defined in `.github/workflows/*.yml`.

## gh-pages.yml
This workflow has two jobs: `build` -> `deploy`.

````text
test  -> npm publish 
      -> cy tests
      -> build site -> deploy gh-pages
````

This workflow is triggered on every push to the `main` branch. 
It will build the project and publish the `dist` folder to the `gh-pages` branch.


## Put localhost on the internet
We sometimes need to put our localhost on the internet so that we can test it remotely.

Ngrok is a good tool for this. It is free for personal use. But if you want to use a
custom domain, you have to pay. If you want to use custom domain, we suggest Cloudflare
tunnels for this.

### Ngrok [TODO]

### Cloudflare tunnels [for collaborators only]

1. Request a subdomain from the team. For example, `air.zenuml.com`.
2. You will be given a command that install a service locally. Run it.
3. Your localhost:8080 will be available at `air.zenuml.com`.
4. Add your subdomain to `vue.config.js` so that it is allowed to access the dev server.

```js
devServer: {
  allowedHosts: "all",
      historyApiFallback: true,
      hot: true,
      host: '0.0.0.0',
      port: 8080,
      client: {
    webSocketURL: 'auto://0.0.0.0:0/ws',
  }
}
```

# Code Structure
This repository contains both the DSL parser and the renderer.

The parser is generated with Antlr4. You can find the definition at `src/g4`. Generated parser is at `src/generated-parser`. 
Parser enhancement with customised functionalities is in the `src/parser` folder.

Almost everything else under serc are for the renderer. The render is based on VueJs 2.x.

