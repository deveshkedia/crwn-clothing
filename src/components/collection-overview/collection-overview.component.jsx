import React from "react";
import { selectCollectionItemsForPreview } from "../../redux/collection/collection.selector";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { connect } from "react-redux";

const CollectionOverview = ({ collection }) => (
  <div className="collection-overview">
    {collection.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collection: selectCollectionItemsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
