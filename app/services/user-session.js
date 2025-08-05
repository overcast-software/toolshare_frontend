import Service from '@ember/service';

export default class UserSessionService extends Service {
  @service store;

  async loadCurrentUser() {
    let accountId = this.session.data.authenticated.account_id;
    if (accountId) {
      let account = await this.store.findRecord('account', accountId);
      this.account = account;
    }
  }
}
