import React, { useState } from "react";

function EditProduct(props) {
  const [name, setName] = useState(props.name);
  const [description, setDescription] = useState(props.description);
  const [price, setPrice] = useState(props.price);
  const [stock, setStock] = useState(props.stock);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleStockChange = (e) => {
    setStock(e.target.value);
  };

  return (
    <div>
      <div className="popup" id="popup-1">
        <div className="overlay" onClick={() => props.closeModal(true)}></div>
        <div className="content">
          <div className="container">
            <h1>Make Changes</h1>
            <div className="form-group">
              <label>Product Name:</label>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Product Description:</label>
              <input
                type="text"
                value={description}
                onChange={handleDescriptionChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Product Price:</label>
              <input
                type="text"
                value={price}
                onChange={handlePriceChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Product Stock:</label>
              <input
                type="text"
                value={stock}
                onChange={handleStockChange}
                className="form-control"
              />
            </div>
            <br />
            <button
              className="btn btn-primary"
              onClick={() =>
                props.updateProduct(name, description, price, stock)
              }
            >
              Update Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
