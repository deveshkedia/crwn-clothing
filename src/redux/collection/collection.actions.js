import COLLECTION_TYPES from "./collection.types";

export const addData = (collectionsMap) => {
  return {
    type: COLLECTION_TYPES.UPDATE_SHOP,
    payload: collectionsMap,
  };
};
