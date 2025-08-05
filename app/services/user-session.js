import Service from '@ember/service';
import { service } from '@ember/service';
import config from 'tool-share/config/environment';

export default class UserSessionService extends Service {
  @service store;
  @service session;

  async loadCurrentUser() {
    let token = this.session.data.authenticated.token;
    if (token) {
      try {
        const response = await fetch(`${config.APP.apiHost}/api/v1/users/self`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': token,
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();

        // Normalize and push the data into the store
        this.store.pushPayload('user', {
          data: {
            type: 'user',
            id: data.item.id,
            attributes: {
              email: data.item.email,
              groupId: data.item.groupId,
              groupName: data.item.groupName,
              isOwner: data.item.isOwner,
              isSuperuser: data.item.isSuperuser,
              name: data.item.name,
            }
          }
        });
      } catch (error) {
        console.error('Error loading current user:', error);
      }
    }
  }
}
