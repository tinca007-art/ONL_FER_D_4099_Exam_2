import React from "react";
import { createRoot } from "react-dom/client";
import  products  from "../js/data/products.js";

    function App() {
        return (
            <Products products={products} />
        );
    }

    function Products({ products }) {
        return (
            <div style={{textAlign: "center"}}>
                <h2>Products</h2>
                <ul>
                    {products.map((product) => (
                        <Item key={product.id} 
                        name={product.name} 
                        price={product.price} />
                    ))}
                </ul>
            </div>
        );
    }

    function Item({ name, price }) {
        return (
            <li style={{listStyleType: "none"}}>
                {name} :
                <strong>Price: {price} Kč</strong>
            </li>
        );
    }


const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);


