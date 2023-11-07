import { toast } from "react-toastify";
import { createComment } from "../services/comment";

export default function FormCreateComment({ publicationId, userId }) {
  const handleAddComment = (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const rating = e.target.rating.value;

    createComment({
      text: text,
      rating: Number(rating),
      userId: Number(userId),
      publicationId: Number(publicationId),
    }).then((data) => toast.success("Comment created"));
  };
  return (
    <form onSubmit={handleAddComment}>
      <h1>FORMULARIO</h1>
      <label htmlFor="text">Comment</label>
      <input type="text" id="text" />
      <label htmlFor="rating">Rating</label>
      <input type="number" id="rating" max={5} />
      <button type="submit">Add comment</button>
    </form>
  );
}
