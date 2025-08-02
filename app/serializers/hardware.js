import JSONAPISerializer from '@ember-data/serializer/json-api';

// }
// import RESTSerializer from '@ember-data/serializer/rest';

// export default class HardwareSerializer extends RESTSerializer {
export default class HardwareSerializer extends JSONAPISerializer {
  keyForAttribute(attr) {
    return attr;
  }
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    // Transform the payload into a JSON API-compliant format
    const transformedPayload = {
      data: payload.rows.map((item) => ({
        type: primaryModelClass.modelName,
        id: item.id,
        attributes: {
          name: item.name,
          assetTag: item.asset_tag,
          serial: item.serial,
          model: item.model.name,
          modelNumber: item.model_number,
          lastCheckout: item.last_checkout,
          category: item.category.name,
          manufacturer: item.manufacturer.name,
          notes: item.notes,
          expectedCheckin: item.expected_checkin,
          orderNumber: item.order_number,
          companyName: item.companyName,
          location: item.location.name,
          image: item.image,
          statusLabel: item.status_label.name,
          assignedTo: item.assigned_to ? item.assigned_to.name : null,
          createdAt: item.created_at,
          purchaseDate: item.purchase_date,
          // purchaseCost: parseFloat(item.purchase_cost.replace(/,/g, '')),
        },
      })),
    };

    // this._super(store, primaryModelClass, transformedPayload, id, requestType);
    return super.normalizeResponse(
      store,
      primaryModelClass,
      transformedPayload,
      id,
      requestType,
    );
  }
}
