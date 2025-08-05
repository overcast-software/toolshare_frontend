import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class UserSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const transformedPayload = {
      data: {
        type: primaryModelClass.modelName,
        id: payload.item.id,
        attributes: {
          email: payload.item.email,
          groupId: payload.item.groupId,
          groupName: payload.item.groupName,
          isOwner: payload.item.isOwner,
          isSuperuser: payload.item.isSuperuser,
          name: payload.item.name,
        },
      },
    };

    return super.normalizeResponse(store, primaryModelClass, transformedPayload, id, requestType);
  }
}
