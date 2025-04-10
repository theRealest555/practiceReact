import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);

    return (
        <div className="container mt-4">
        <h1 className="text-center mb-4">Products</h1>
        <div className="row">
            {products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
                <Link to={`/product/${product.id}`} className="card h-100 text-decoration-none text-dark">
                <img src={product.image} alt={product.title} className="card-img-top p-3" style={{ height: "250px", objectFit: "contain" }} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text text-success fw-bold">${product.price}</p>
                </div>
                </Link>
            </div>
            ))}
        </div>
        </div>
    );
    };

    const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }, [id]);

    if (!product) return <p className="text-center mt-4">Loading...</p>;

    return (
        <div className="container mt-4">
        <Link to="/" className="btn btn-outline-primary mb-3">&larr; Back to Products</Link>
        <div className="card shadow-lg p-4 mx-auto" style={{ maxWidth: "600px" }}>
            <img src={product.image} alt={product.title} className="card-img-top p-3" style={{ height: "300px", objectFit: "contain" }} />
            <div className="card-body text-center">
                <h2 className="card-title">{product.title}</h2>
                <p className="card-text">{product.description}</p>
                <p className="text-success fw-bold fs-4">${product.price}</p>
            </div>
        </div>
        </div>
    );
    };

    const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
        </Router>
    );
    };

export default App;