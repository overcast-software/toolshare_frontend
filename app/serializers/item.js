import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ItemSerializer extends JSONAPISerializer {
  keyForAttribute(attr) {
    return attr;
  }
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const transformedPayload = {
      data: payload.items.map(item => ({
        type: primaryModelClass.modelName,
        id: item.id,
        attributes: {
          archived: item.archived,
          assetId: item.assetId,
          createdAt: item.createdAt,
          description: item.description,
          imageId: item.imageId,
          insured: item.insured,
          name: item.name,
          purchasePrice: item.purchasePrice,
          quantity: item.quantity,
          soldTime: item.soldTime,
          thumbnailId: item.thumbnailId,
          updatedAt: item.updatedAt,
          labels: item.labels,
          location: item.location
        }
      }))
    };
    return super.normalizeResponse(store, primaryModelClass, transformedPayload, id, requestType);
  }
}
