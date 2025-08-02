import ApplicationAdapter from './application';

export default class HardwareAdapter extends ApplicationAdapter {
  namespace = 'api/assets';

  // Override the buildURL method to point to the JSON file
  buildURL(modelName, id, snapshot, requestType, query) {
    if (requestType === 'findAll') {
      return `${this.namespace}/hardware.json`;
    }
    return super.buildURL(modelName, id, snapshot, requestType, query);
  }
}
