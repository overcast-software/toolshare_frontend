import { module, test } from 'qunit';
import { setupTest } from 'tool-share/tests/helpers';

module('Unit | Service | user_session', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:user-session');
    assert.ok(service);
  });
});
