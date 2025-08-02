import { setupTest } from 'tool-share/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | hardware', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('hardware', {});
    assert.ok(model, 'model exists');
  });
});
