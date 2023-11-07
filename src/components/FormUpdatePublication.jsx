import { useMutation } from "react-query";
import "/public/css/formUpdatePublications.css";
import { deletePublication, updatePublication } from "../services/publication";
import { toast } from "react-toastify";
import { queryClient } from "../App";
import { useLocation } from "wouter";

function verification(formData) {
  if (formData.get("stock") < 0) {
    toast.error("Stock no puede ser negativo");
    return;
  }
  if (formData.get("price") < 0) {
    toast.error("Precio no puede ser negativo");
    return;
  }
  return true;
}

export default function FormUpdatePublication({ publication }) {
  const [location, setLocation] = useLocation();
  const { mutate } = useMutation(
    (data) => updatePublication(publication.publicationId, data),
    {
      onSuccess: () => {
        toast.success("Publicación actualizada");
        queryClient.invalidateQueries("product");
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    if (verification(formData)) {
      const data = Object.fromEntries(formData);

      mutate(data);
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();

    deletePublication(publication.publicationId);
    setLocation("/");
  };
  return (
    <form className="form-updated" onSubmit={handleSubmit}>
      <h2>Update Publication</h2>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        defaultValue={publication.name}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        name="description"
        id="description"
        defaultValue={publication.description}
      />
      <label htmlFor="price">Price</label>
      <input
        type="number"
        name="price"
        id="price"
        defaultValue={publication.price}
      />
      <label htmlFor="stock">Stock</label>
      <input
        type="number"
        name="stock"
        id="stock"
        min={0}
        defaultValue={publication.stock}
      />
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
      <button type="submit">Update</button>
    </form>
  );
}
