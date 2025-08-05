import Base from 'ember-simple-auth/authenticators/base';
import { service } from '@ember/service';

export default class CustomAuthenticator extends Base {
  @service store;
  @service session;

  async authenticate(username, password) {
    const response = await fetch('http://localhost:3100/api/v1/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        stayLoggedIn: true,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Authentication failed');
    }

    const data = await response.json();
    
    // Store session data
    return {
      attachment_token: data.attachment_token,
      token: data.token,
      expires_at: data.expiresAt,
    };
  }

  async restore(data) {
    if (data.token) {
      return data;
    }
    throw new Error('No valid session data');
  }

  async invalidate() {
    // Optionally call logout endpoint
    return Promise.resolve();
  }
}
