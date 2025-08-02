import { module, test } from 'qunit';
import { setupRenderingTest } from 'tool-share/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | hardware-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<HardwareList />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <h1>ToolShare - Hardware Inventory</h1>
    `);

    assert.dom().hasText('ToolShare - Hardware Inventory');
  });
});
