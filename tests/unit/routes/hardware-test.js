import { module, test } from 'qunit';
import { setupTest } from 'tool-share/tests/helpers';

module('Unit | Route | hardware', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:hardware');
    assert.ok(route);
  });
});
