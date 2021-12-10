import SHOP_DATA from "./shop.data";

const INITIAL_STATE = {
  collection_items: SHOP_DATA,
};

const CollectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.payload) {
    default:
      return state;
  }
};

export default CollectionReducer;
