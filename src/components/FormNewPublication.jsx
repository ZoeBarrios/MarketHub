import { useMutation, useQuery } from "react-query";
import { getCategories } from "../services/category";
import { useRef, useState } from "react";
import { createPublication } from "../services/publication";

export default function FormNewPublication({ UserId }) {
  const { data, isLoading } = useQuery(["categories"], () => getCategories());
  const mutation = useMutation(createPublication, {
    onSettled: () => {
      mutation.mutate("publicationUser");
    },
  });
  const selectOption = useRef(null);
  const [formData, setFormData] = useState({
    Name: "",
    Description: "",
    Price: "",
    UserId: UserId,
    Stock: "",
    Image: null,
    Category: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();

    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
  };
  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;
    const updatedValue = type === "file" ? files[0] : value;

    setFormData({
      ...formData,
      [name]: updatedValue,
    });
    formData.append("Category", selectOption.current.value);

    mutation.mutate(formData);
  };
  return (
    <form className="form-new-publication" onSubmit={handleSubmit}>
      <h2>Create a new publication on MarketHub</h2>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="Name" onChange={handleInputChange} />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="Description"
        onChange={handleInputChange}
      />
      <label htmlFor="price">Price</label>
      <input
        type="number"
        id="price"
        name="Price"
        onChange={handleInputChange}
      />
      <input type="hidden" id="userId" name="UserId" value={UserId} />
      <label htmlFor="stock">Stock</label>
      <input
        type="number"
        id="stock"
        name="Stock"
        min={1}
        onChange={handleInputChange}
      />
      <label htmlFor="image">Imagen</label>
      <input type="file" id="image" name="Image" onChange={handleInputChange} />
      <label htmlFor="category">Category</label>
      <select id="category" name="Category" ref={selectOption}>
        {isLoading
          ? null
          : data?.map((category) => (
              <option key={category.categoryId} value={category.categoryId}>
                {category.name}
              </option>
            ))}
      </select>
      <button type="submit">Publicar</button>
    </form>
  );
}
