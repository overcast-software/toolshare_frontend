import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ItemsRoute extends Route {
  @service store;
  @service session;
  beforeModel(transition){
    this.session.setup()
    this.session.requireAuthentication(transition, 'login');
  }
  async model() {
    return this.store.findAll('item');
  }
}
