import RESTAdapter from '@ember-data/adapter/rest';
import { computed } from '@ember/object';
import { service } from '@ember/service';


export default class ApplicationAdapter extends RESTAdapter {
  @service session;
  host = 'locahost:3100';
  namespace = 'api/assets';
  @computed('session.data.authenticated.{access_token,token}', 'session.isAuthenticated')
  get headers() {
    let headers = {};
    if (this.session.isAuthenticated) {
      // OAuth 2
      headers['Authorization'] = this.session.data.authenticated.token
    }
    return headers;
  }
}
