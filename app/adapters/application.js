import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  host = 'locahost:4200';
  namespace = 'api/assets';
}
