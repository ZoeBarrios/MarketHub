import { toast } from "react-toastify";
import { createComment } from "../services/comment";

export default function FormCreateComment({
  publicationId,
  userId,
  closeModal,
}) {
  const handleAddComment = (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const rating = e.target.rating.value;

    if (!text || text.trim() === "") {
      toast.error("Please enter a comment.");
      return;
    }

    if (!rating || rating < 1 || rating > 5) {
      toast.error("Please enter a valid rating between 1 and 5.");
      return;
    }

    createComment({
      text: text,
      rating: Number(rating),
      userId: Number(userId),
      publicationId: Number(publicationId),
    })
      .then((data) => {
        toast.success("Comment created");
        closeModal();
      })
      .catch((error) => {
        toast.error("Error creating the comment. Please try again.");
      });
  };

  return (
    <form onSubmit={handleAddComment} className="form-create-comment">
      <h2>Add Comment</h2>
      <label htmlFor="text">Comment</label>
      <textarea type="text" id="text" name="text" />
      <label htmlFor="rating">Rating</label>
      <input type="number" id="rating" max={5} name="rating" />
      <button type="submit">Add comment</button>
    </form>
  );
}
