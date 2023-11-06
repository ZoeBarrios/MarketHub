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
  });
  const handleSubmit = (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();

    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    formDataToSend.append("CategoryId", selectOption.current.value);

    mutation.mutate(formDataToSend);
  };
  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;
    const updatedValue = type === "file" ? files[0] : value;

    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };
  return (
    <form className="form-new-publication" onSubmit={handleSubmit}>
      <h2>Create a new publication on MarketHub</h2>
      <label htmlFor="Name">Name</label>
      <input type="text" id="Name" name="Name" onChange={handleInputChange} />

      <label htmlFor="Price">Price</label>
      <input
        type="number"
        id="Price"
        name="Price"
        onChange={handleInputChange}
      />
      <input type="hidden" id="userId" name="UserId" value={UserId} />
      <label htmlFor="Stock">Stock</label>
      <input
        type="number"
        id="Stock"
        name="Stock"
        min={1}
        defaultValue={1}
        onChange={handleInputChange}
      />

      <label htmlFor="Description">Description</label>
      <textarea
        id="Description"
        name="Description"
        onChange={handleInputChange}
      />
      <label htmlFor="Category">Category</label>
      <select id="Category" name="Category" ref={selectOption}>
        {isLoading
          ? null
          : data?.map((category) => (
              <option key={category.categoryId} value={category.categoryId}>
                {category.name}
              </option>
            ))}
      </select>
      <label htmlFor="Image">Upload an image</label>
      <input type="file" id="Image" name="Image" onChange={handleInputChange} />
      <button type="submit">Publicar</button>
    </form>
  );
}
