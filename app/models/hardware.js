import Model, { attr } from '@ember-data/model';

export default class HardwareModel extends Model {
  @attr('string') name;
  @attr('string') assetTag;
  @attr('string') serial;
  @attr('string') model;
  @attr('string') modelNumber;
  @attr('string') lastCheckout;
  @attr('string') category;
  @attr('string') manufacturer;
  @attr('string') notes;
  @attr('string') expectedCheckin;
  @attr('string') orderNumber;
  @attr('string') companyName;
  @attr('string') location;
  @attr('string') image;
  @attr('string') statusLabel;
  @attr('string') assignedTo;
  @attr('string') createdAt;
  @attr('string') purchaseDate;
  @attr('number') purchaseCost;
}
