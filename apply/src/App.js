import logo from "./logo.svg";
import "./App.css";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import React, { Component } from "react";

export default class App extends Component {
    state = { currentCategory: "a", products: [] };
    changeCategory = (category) => {
        this.setState({ currentCategory: category.categoryName });
        this.getProducts(category.id);
    };
    componentDidMount() {
        this.getProducts();
    }
    getProducts = (categoryId) => {
        let url = "http://localhost:3000/products";
        if (categoryId) {
            url += "?categoryId=" + categoryId;
        }
        fetch(url)
            .then((response) => response.json())
            .then((data) => this.setState({ products: data }));
    };
    render() {
        return (
            <div className="App">
                <Container>
                    <Navi />

                    <Row>
                        <Col xs="3">
                            <CategoryList
                                currentCategory={this.state.currentCategory}
                                changeCategory={this.changeCategory}
                                title="Category List"
                            />
                        </Col>
                        <Col xs="9">
                            <ProductList
                                products={this.state.products}
                                currentCategory={this.state.currentCategory}
                                title="Product List"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
