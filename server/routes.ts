import * as express from 'express';

import OrgCtrl from './controllers/org';
import ChurchCtrl from './controllers/church';
import EventCtrl from './controllers/event';
import TeamCtrl from './controllers/team';
import UserCtrl from './controllers/user';


export default function setRoutes(app) {

  const router = express.Router();
  const orgCtrl = new OrgCtrl();
  const churchCtrl = new ChurchCtrl();
  const eventCtrl = new EventCtrl();
  const teamCtrl = new TeamCtrl();
  const userCtrl = new UserCtrl();

  // Users
  router.route('/auth/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);
  //Organization
  router.route('/org').get(orgCtrl.getAll);
  router.route('/org/count').get(orgCtrl.count);
  router.route('/org').post(orgCtrl.insert);
  router.route('/org/:id').get(orgCtrl.get);
  router.route('/org/:id').put(orgCtrl.update);
  router.route('/org/:id').delete(orgCtrl.delete);
  //Church
  router.route('/church').get(churchCtrl.getAll);
  router.route('/church/count').get(churchCtrl.count);
  router.route('/church').post(churchCtrl.insert);
  router.route('/church/:id').get(churchCtrl.get);
  router.route('/church/:id').put(churchCtrl.update);
  router.route('/church/:id').delete(churchCtrl.delete);
  //Event
  router.route('/event').get(churchCtrl.getAll);
  router.route('/event/count').get(eventCtrl.count);
  router.route('/event').post(eventCtrl.insert);
  router.route('/event/:id').get(eventCtrl.get);
  router.route('/event/:id').put(eventCtrl.update);
  router.route('/event/:id').delete(eventCtrl.delete);
  //Team
  router.route('/team').get(teamCtrl.getAll);
  router.route('/team/count').get(teamCtrl.count);
  router.route('/team').post(teamCtrl.insert);
  router.route('/team/:id').get(teamCtrl.get);
  router.route('/team/:id').put(teamCtrl.update);
  router.route('/team/:id').delete(teamCtrl.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
