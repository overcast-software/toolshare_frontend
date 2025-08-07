import Model, { attr, hasMany } from '@ember-data/model';

export default class ItemModel extends Model {
  @attr('boolean') archived;
  @attr('string') assetId;
  @attr('string') createdAt;
  @attr('string') description;
  @attr('string') imageId;
  @attr('boolean') insured;
  @attr('string') name;
  @attr('number') purchasePrice;
  @attr('number') quantity;
  @attr('string') soldTime;
  @attr('string') thumbnailId;
  @attr('string') updatedAt;

  @hasMany('attachment') attachments;
  // @hasMany('label') labels;
  // @belongsTo('location') location;
}
