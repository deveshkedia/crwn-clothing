import COLLECTION_TYPES from "./collection.types";

const INITIAL_STATE = {
  collection_items: null,
};

const CollectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COLLECTION_TYPES.UPDATE_SHOP:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default CollectionReducer;
