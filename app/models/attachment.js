import Model, { belongsTo } from '@ember-data/model';

export default class AttachmentModel extends Model {
  @belongsTo('item') item;
}
