import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoginController extends Controller {
  @service session;
  @service userSession;
  @tracked errorMessage;
  @tracked username;
  @tracked password;

  @action
  async authenticate(event) {
    event.preventDefault();
    try {
      await this.session.authenticate('authenticator:custom', this.username, this.password)
      this.userSession.loadCurrentUser()
      // Redirect or perform actions on successful login
    } catch (error) {
      this.errorMessage = error.message || 'Authentication failed';
    }
  }

  @action
  updateUsername(event) {
    this.username = event.target.value;
  }

  @action
  updatePassword(event) {
    this.password = event.target.value;
  }
}
