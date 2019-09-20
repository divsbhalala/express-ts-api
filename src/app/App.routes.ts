import { Router } from 'express';
import * as routers from './routers';

export class AppRouter {
  protected router: Router;

  constructor() {
    this.router = Router();
  }

  /**
   * Main app router
   */
  public getAppRouter(): Router {
    // user routes
    this.router.use('/users', routers.usersRouter.router);
    return this.router;
  }
}
