import * as debug from 'debug';
import { Request, Response, NextFunction } from 'express-serve-static-core';

const logger = debug('app:src/app/components/Users/Users.controller.ts');
import User from '../../models/User';

/**
 * Example `Users` controller
 */
export class UsersController {

  /**
   * POST Show user's name
   * POST /api/Users/register
   */
  public Register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        body: { name, fbId },
      } = req;
      const user = new User({
        name,
        fbId
      });

      User.findOne({ fbId }, (err, existingUser) => {
        if (err) {
          return res.status(500).json({
            error: err
          });
        }

        if (existingUser) {
          return res.status(200).json({
            data: existingUser
          });
        }

        user.save((errUsers, usr) => {
          if (errUsers) {
            return res.status(500).json({
              error: errUsers
            });
          }
          return res.status(200).json({
            data: usr
          });
        });
      });
    } catch (err) {
      logger('endpointPostDisplayName:: error: ', err);
      next(err);
    }
  };
}
