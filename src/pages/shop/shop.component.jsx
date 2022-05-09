import React from "react";
import { Route } from "react-router-dom";
import WithSpinner from "../../components/with-spiner/with-spinner.component";
import { firestore, transformSnapShot } from "../../firebase/firebase.utils";
import { addData } from "../../redux/collection/collection.actions";
import { connect } from "react-redux";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component.jsx";

const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapShot) => {
      const CollectionMap = transformSnapShot(snapShot);
      console.log(CollectionMap);
      updateCollections(CollectionMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          react={(props) => (
            <CollectionOverviewWithSpinner
              isLoading={props.loading}
              {...props}
            />
          )}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={props.loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) => dispatch(addData(collectionMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
