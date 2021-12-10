import { createSelector } from "reselect";
import memoize from "lodash.memoize";

export const selectCollection = (state) => state.collection;

export const selectCollectionItems = createSelector(
  [selectCollection],
  (collection) => collection.collection_items
);

export const selectCollections = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollectionItems],
    (collectionItem) => collectionItem[collectionUrlParam]
  )
);

export const selectCollectionItemsForPreview = createSelector(
  [selectCollectionItems],
  (collection) => Object.values(collection)
);
