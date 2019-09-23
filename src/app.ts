import { Env, Database } from './app/core';
Env.loadEnvSettings();

import { App } from './app/app';

Database.init();

const app: App = new App();

export default app.app;
