import EmberRouter from '@ember/routing/router';
import config from 'tool-share/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login');
  this.route('items');
  this.route('authenticated', { path: '' }, function() {
  });
});
