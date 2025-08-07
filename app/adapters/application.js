import RESTAdapter from '@ember-data/adapter/rest';
import { computed } from '@ember/object';
import { service } from '@ember/service';
import config from 'tool-share/config/environment';


export default class ApplicationAdapter extends RESTAdapter {
  @service session;
  host = config.APP.apiHost;
  namespace = 'api/v1';
  @computed('session.data.authenticated.token', 'session.isAuthenticated')
  get headers() {
    let headers = {};

    if (this.session.isAuthenticated) {
      headers['Authorization'] = this.session.data.authenticated.token
    }

    return headers;
  }
}
