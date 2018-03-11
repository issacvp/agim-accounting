import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';

import User from '../models/user';
import BaseCtrl from './base';

export default class UserCtrl extends BaseCtrl {
  model = User;

  login = (req, res) => {
    this.model.findOne({ email: req.body.email }, (err, user) => {
      if (!user) {
        res.status(200).json({
          data: {
            errors: [
              "Your account is not present!",
            ]
          }
        });
        return res;
      }
      user.comparePassword(req.body.password, (error, isMatch) => {
        if (!isMatch && user.active) {
          res.status(200).json({
            data: {
              errors: [
                "Email/Password Incorrect or your profile is not active!",
              ]
            }
          });
          return res;
        }
        const token = jwt.sign({ user: user }, process.env.SECRET_TOKEN); // , { expiresIn: 10 } seconds
        res.status(200).json({
          data: {
            token: token,
            messages: [
              "Successful"
            ]
          }
        });
      });
    });
  }

}
