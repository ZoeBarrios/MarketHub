import { useQuery } from "react-query";
import { getCommentsByPublication } from "../services/comment";
import Loader from "./Loader";

export default function Comments({ id }) {
  const { data: Comentaries, isLoading: commentsLoading } = useQuery(
    ["Comentaries", id],
    () => getCommentsByPublication(id)
  );

  return commentsLoading ? (
    <Loader />
  ) : Comentaries.length > 0 ? (
    <ul>
      {Comentaries.map((Comentary) => (
        <li key={Comentary.commentaryId} className="comentarySection-values">
          <label htmlFor="">{Comentary.text}</label>
          <label htmlFor="">{Comentary.raiting}⭐</label>
        </li>
      ))}
    </ul>
  ) : (
    <h2>There aren't any comments yet</h2>
  );
}
