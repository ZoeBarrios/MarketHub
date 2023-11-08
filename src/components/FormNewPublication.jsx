import { useRef, useState } from "react";
import { useQuery } from "react-query";
import Loader from "./Loader";
import { createPublication } from "../services/publication";
import { getCategories } from "../services/category";
import { toast } from "react-toastify";
import { validateForm } from "../utils/utilsFunctions";

export default function FormNewPublication({ UserId, closeModal }) {
  const { data, isLoading } = useQuery(["categories"], () => getCategories());

  const selectOption = useRef(null);
  const [formData, setFormData] = useState({
    Name: "",
    Description: "",
    Price: "",
    UserId: UserId,
    Stock: 1,
    Image: null,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      for (const key in validationErrors) {
        toast.error(validationErrors[key]);
      }
      return;
    }

    const formDataToSend = new FormData();

    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    formDataToSend.append("CategoryId", selectOption.current.value);

    createPublication(formDataToSend).then((data) => {
      toast.success("Publication created successfully");
      closeModal();
    });
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
        {isLoading ? (
          <Loader />
        ) : (
          data?.map((category) => (
            <option key={category.categoryId} value={category.categoryId}>
              {category.name}
            </option>
          ))
        )}
      </select>

      <label htmlFor="Image">Upload an image</label>
      <input type="file" id="Image" name="Image" onChange={handleInputChange} />

      <button type="submit" className="btn-orange">
        Create
      </button>
    </form>
  );
}
