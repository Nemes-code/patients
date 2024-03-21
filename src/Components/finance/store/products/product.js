import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./productList";
import EditModal from "./editProduct";
import Nav from "../../navigation";

function Product() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");

  function saveProduct() {
    const data = {
      name: name,
      description: description,
      price: price,
      stock: stock,
    };
    axios
      .post("http://localhost:8000/saveProduct", data)
      .then(function (response) {
        setName("");
        setDescription("");
        setPrice("");
        setStock("");
        fetchProducts();
      });
  }

  function deleteProduct(productId) {
    axios
      .post("http://localhost:8000/deleteProduct", { id: productId })
      .then(function (response) {
        fetchProducts();
      });
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  function fetchProducts() {
    axios.get("http://localhost:8000/getProduct").then(function (response) {
      setProducts(response.data);
    });
  }

  function showModal(
    productId,
    productName,
    productDescription,
    productPrice,
    productStock
  ) {
    setId(productId);
    setName(productName);
    setDescription(productDescription);
    setPrice(productPrice);
    setStock(productStock);
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  function updateProduct(newName, newDescription, newPrice, newStock) {
    const data = {
      id: id,
      name: newName,
      description: newDescription,
      price: newPrice,
      stock: newStock,
    };
    axios
      .post("http://localhost:8000/updateProduct", data)
      .then(function (response) {
        fetchProducts();
        closeModal();
      });
  }

  return (
    <div className="d-flex">
      <Nav />
      <div className="container">
        <h1>Products And Store</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
          className="form-control"
        />
        <br />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Product Description"
          className="form-control"
        />
        <br />
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Product Price"
          className="form-control"
        />
        <br />
        <input
          type="text"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="Product Stock"
          className="form-control"
        />
        <br />
        <button onClick={saveProduct} type="button" className="btn btn-primary">
          Save
        </button>
        <br />
        <br />

        <ProductList
          products={products}
          deleteProduct={deleteProduct}
          search={search}
          showModal={showModal}
        />
        {modal && (
          <EditModal
            id={id}
            name={name}
            description={description}
            price={price}
            stock={stock}
            updateProduct={updateProduct}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default Product;
