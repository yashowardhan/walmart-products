import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";
import { fetchProduct } from "../redux/fetchProducts";

class ProductDetail extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }
  render() {
    return (
      <div className="column" style={{ paddingBottom: "4rem" }}>
        <h1 style={{ paddingTop: "2rem", paddingBottom: "1rem" }}>
          {this.props.productResponse.productName}
        </h1>
        <div className="ui relaxed divided list">
          <div className="item">
            <img
              alt="image"
              width="500"
              height="333"
              src={`https://mobile-tha-server-8ba57.firebaseapp.com/${this.props.productResponse.productImage}`}
            />
            <div className="content">
              <div className="description" style={{ padding: "1rem 8rem" }}>
                {this.props.productResponse.longDescription}

                <h3 style={{ paddingTop: "1rem" }}>
                  Price: {this.props.productResponse.price}
                </h3>
                <Rating
                  name="simple-controlled"
                  value={this.props.productResponse.reviewRating}
                />
                <h3>Total Reviews: {this.props.productResponse.reviewCount}</h3>
              </div>
            </div>
          </div>
        </div>

        <Button
          variant="contained"
          color="secondary"
          onClick={() => this.props.history.push("/")}
        >
          Back to home page
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    productResponse: state.productsReducer[ownProps.match.params.productId],
  };
};

export default connect(mapStateToProps, { fetchProduct })(ProductDetail);
