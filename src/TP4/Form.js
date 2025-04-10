import React, { useState } from 'react';

const Form = ({ onAddProduct }) => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    thumbnail: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onAddProduct({ ...formData, id: Date.now() });
    setFormData({ title: '', price: '', thumbnail: '' });
  };

  return (
    <form className="mb-4">
      <input
        type="text"
        name="title"
        placeholder="Titre du Produit"
        className="form-control mb-3"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="price"
        placeholder="Prix"
        className="form-control mb-3"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="thumbnail"
        placeholder="URL de l'Image"
        className="form-control mb-3"
        value={formData.thumbnail}
        onChange={handleChange}
        required
      />
      <button type="button" className="btn btn-primary w-100" onClick={handleSubmit}>
        Ajouter le Produit
      </button>
    </form>
  );
};

export default Form;
