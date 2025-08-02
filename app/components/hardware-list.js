import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class HardwareListComponent extends Component {
  @service store;
  @tracked hardware = [];

  constructor() {
    super(...arguments);
    this.loadHardware();
  }

  async loadHardware() {
    try {
      this.hardware = await this.store.findAll('hardware');
    } catch (error) {
      console.error('Error loading hardware:', error);
    }
  }
}
