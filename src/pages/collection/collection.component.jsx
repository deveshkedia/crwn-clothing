import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.componenet";
import { connect } from "react-redux";
import { selectCollections } from "../../redux/collection/collection.selector";
import "./collection.styles.scss";

const CollectionPage = ({ collections }) => {
  const { title, items } = collections;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collections: selectCollections(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
