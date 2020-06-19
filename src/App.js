import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" exact component={ProductList}></Route>
              <Route
                path="/products/detail/:productId"
                component={ProductDetail}
              ></Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
