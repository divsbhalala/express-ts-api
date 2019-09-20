# Express TypeScript API

Simple Express API built with TypeScript.

### Technologies and Packages used

TypeScript, ES6, Express, TSLint, Dotenv, Prettier, Joi, Nodemon

### Installation

```
yarn install 
```

### Scripts

`yarn run dev`

- run the app in development mode, app will be reloaded on file changes

`yarn run start`

- start the app in non-reloadable mode

`yarn run build`

- build the app

`yarn run lint`

- check typescript errors via TSLint

`yarn run lint:fix`

- check and fix typescript errors via TSLint

`yarn run format`

- check for formatting errors via Prettier

`yarn run format:fix`

- fix formatting errors via Prettier

`yarn run format:lint:fix`

- check and fix typescript errors via TSLint and correct formatting errors via Prettier

### Debugging

If you need to debug some of your code during development, it's very easy. Open following URL in Chrome: `chrome://inspect/#devices`. Click on `Open dedicated DevTools for Node` => DevTools should open. Use `Ctrl + P` shortcut to find the file you need, for example `Common.controller.ts`. After adding a breakpoint the TypeScript file should be opened directly in devtools.

**Note:** If inspect mode does not work for you, you need to configure ports by clicking on `Configure` button in `chrome://inspect/# devices`. The websocket port through which the inspect mode works is displayed during app launch in the command line ("Debugger listening on ws://127.0.0.1:9229/..."). In this example you need to add `localhost:9229` in `Configure` settings.

### API Endpoints params validation

To validate input params sent from API user [Joi](https://github.com/hapijs/joi) package is used. At first you need to define validation schemas ([example](https://github.com/jbutko/express-ts-api-boilerplate/blob/master/src/app/components/Common/Common.validators.ts)). The next step is to import schemas in your router, instantite Joi validator and use it as middleware. This way you can separate params validation logic out of controllers. Check the [example](https://github.com/jbutko/express-ts-api-boilerplate/blob/master/src/app/routers/Common.router.ts).

### Production deployment example

Clone the repo on any unix (cloud) server. Make a build of the app:

```
yarn run build
```

Install [pm2](https://github.com/Unitech/pm2) process manager:

```
yarn add -g pm2
```

Start the app:

```
pm2 start pm2-process.json
```


Test  the app using JEST:

```
npm run test
```

App will be started in daemon mode (background). To check the logs of the app issue following command:

```
pm2 logs nameOfTheAppFromPm2
```

You can find the name of the app in `pm2-process.json` file.

