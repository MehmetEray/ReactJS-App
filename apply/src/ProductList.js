import React, { Component } from "react";
import { Table ,Button} from "reactstrap";

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        state: {
        }
    }
    render() {
        return (
            <div>
                <p>
                    {this.props.title} - {this.props.currentCategory}
                </p>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity Per Unit</th>
                            <th>Units In Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map((product) => (
                            <tr key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td>{product.productName}</td>
                                <td>{product.unitPrice}</td>
                                <td>@{product.quantityPerUnit}</td>
                                <td>@{product.unitsInStock}</td>
                                <td><Button color="info">Add To Cart</Button>{' '}</td>
                            </tr>
                        ))}
                        <tr></tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}
