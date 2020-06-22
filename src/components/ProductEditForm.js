import React from "react";
import TextInput from "./TextInput";
//import SelectInput from "../common/SelectInput";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";
import { fetchProduct } from "../redux/fetchProducts";

class ProductEditForm extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }

  onChange = (event, value) => {
    console.log(value, "onchange event handler");
  };
  render() {
    return (
      <div className="row" style={{ paddingBottom: "4rem" }}>
        <h1 style={{ paddingTop: "2rem", paddingBottom: "1rem" }}>
          Edit Product Page
        </h1>
        <TextInput
          name="title"
          label="Product Name"
          value={this.props.productResponse.productName}
          //onChange={onChange}
          //error={errors.title}
        />
        <TextInput
          name="title"
          label="Product Image URL"
          value={`https://mobile-tha-server-8ba57.firebaseapp.com/${this.props.productResponse.productImage}`}
          //onChange={onChange}
          //error={errors.title}
        />
        <TextInput
          name="title"
          label="Product Short Description"
          value={this.props.productResponse.shortDescription}
          //onChange={onChange}
          //error={errors.title}
        />
        <TextInput
          name="title"
          label="Product Long Description"
          value={this.props.productResponse.longDescription}
          //onChange={onChange}
          //error={errors.title}
        />
        <TextInput
          name="title"
          label="Product Price"
          value={this.props.productResponse.price}
          //onChange={onChange}
          //error={errors.title}
        />
        <TextInput
          name="title"
          label="Product Review Rating"
          value={this.props.productResponse.reviewRating}
          //onChange={onChange}
          //error={errors.title}
        />

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

export default connect(mapStateToProps, { fetchProduct })(ProductEditForm);
