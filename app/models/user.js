import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') email;
  @attr('string') groupId;
  @attr('string') groupName;
  @attr('boolean') isOwner;
  @attr('boolean') isSuperuser;
  @attr('string') name;
}
