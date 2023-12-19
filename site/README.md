# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```sh
npm ci
```

## Local Development

```sh
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Troubleshooting

When changes are not reflected as expected during local development, a good first troubleshooting step is to stop the local development server, clear the environment, and start over:

```sh
# <Ctrl-C> will stop the current running development server

# Clear the environment, to include the dependencies
npm run clear
rm -rf node_modules

# Re-install from scratch and start local development again
npm ci
npm run start
```

## Build

```sh
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Serve

```sh
npm run serve
```

Serves the built website locally.

## Deployment

Using SSH:

```sh
USE_SSH=true npm run deploy
```

Not using SSH:

```sh
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
