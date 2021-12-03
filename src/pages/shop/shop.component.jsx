import React from "react";
import ShopData from "./shop.data";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: ShopData,
    };
  }
  render() {
    return <div>Shop Page</div>;
  }
}

export default ShopPage;
