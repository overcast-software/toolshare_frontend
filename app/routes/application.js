import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service('router') router;
@service session;

  beforeModel(transition) {
    if (this.session.isAuthenticated) {
      this.router.transitionTo('items');
    }
  }
}
