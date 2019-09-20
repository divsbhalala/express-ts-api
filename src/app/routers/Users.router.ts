import { Router } from 'express';
import * as validation from 'express-joi-validation';
import { UsersController, UsersValidators } from '../components/Users';

export class UsersRouter {
  public router: Router;
  protected usersController: UsersController;
  protected validator: any;

  constructor() {
    this.usersController = new UsersController();
    this.validator = validation({ passError: true });
    this.router = this.initRouter();
  }

  /**
   * Users router
   */
  private initRouter(): Router {
    const router: Router = Router();

    router
      .post(
        '/register',
        this.validator.body(UsersValidators.Register),
        this.usersController.Register
      );

    return router;
  }
}

export const usersRouter = new UsersRouter();
