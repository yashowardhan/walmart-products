import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { connect } from "react-redux";
import { fetchProducts, sortProducts } from "../redux/fetchProducts";
import ProductPagination from "./Pagination";
import Loading from "./Loading";
import { Button } from "@material-ui/core";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }

  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
    const { sortProducts } = this.props;
    sortProducts();
  }
  handleChange() {
    this.setState({
      isClicked: true,
    });
  }
  render() {
    const { products } = this.props;
    const { sortproducts } = this.props;
    if (products.length < 1) {
      return <Loading />;
    } else {
      const productList = products.map((product) => {
        if (product.shortDescription && product.shortDescription.length > 100) {
          product.shortDescription = product.shortDescription.substring(0, 100);
        }
        return (
          <div className="column" style={{ paddingBottom: "4rem" }}>
            <Link to={`products/detail/${product.productId}`}>
              <ProductCard
                productId={product.productId}
                productName={product.productName}
                longDescription={product.longDescription}
                shortDescription={product.shortDescription}
                productImage={`https://mobile-tha-server-8ba57.firebaseapp.com/${product.productImage}`}
                reviewRating={product.reviewRating}
                productPrice={product.price}
                productInStock={product.inStock}
              />
            </Link>
          </div>
        );
      });
      const sortedproductList =
        sortproducts[0] &&
        sortproducts[0].map((product) => {
          if (
            product.shortDescription &&
            product.shortDescription.length > 100
          ) {
            product.shortDescription = product.shortDescription.substring(
              0,
              100
            );
          }
          return (
            <div className="column" style={{ paddingBottom: "4rem" }}>
              <Link to={`products/detail/${product.productId}`}>
                <ProductCard
                  productId={product.productId}
                  productName={product.productName}
                  longDescription={product.longDescription}
                  shortDescription={product.shortDescription}
                  productImage={`https://mobile-tha-server-8ba57.firebaseapp.com/${product.productImage}`}
                  reviewRating={product.reviewRating}
                  productPrice={product.price}
                  productInStock={product.inStock}
                />
              </Link>
            </div>
          );
        });

      return (
        <div>
          <h1 style={{ paddingTop: "2rem", paddingBottom: "1rem" }}>
            Walmart Product Page
          </h1>
          <p>Filter by Price</p>
          <Button onClick={() => this.handleChange()}>
            Price $500 - 1000
          </Button>{" "}
          <div className="ui relaxed four column grid">
            <div className="row">
              {" "}
              {this.state.isClicked == true ? sortedproductList : productList}
            </div>
            <ProductPagination />
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => {
  let products = state.productsReducer;
  products = Object.values(products);
  let sortproducts = state.sortReducer;
  sortproducts = Object.values(sortproducts);
  console.log(products, sortproducts[0], "both of them together");
  return { products, sortproducts };
};

export default connect(mapStateToProps, {
  fetchProducts,
  sortProducts,
})(ProductList);
