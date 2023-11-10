import { useQuery } from "react-query";
import { getCommentsByPublication } from "../../services/comment";
import Loader from "../Loader";
import Comment from "./Comment";

export default function Comments({ id }) {
  const { data: Comentaries, isLoading: commentsLoading } = useQuery(
    ["Comentaries", id],
    () => getCommentsByPublication(id)
  );

  return commentsLoading ? (
    <Loader />
  ) : Comentaries.length > 0 ? (
    <div className="product-data-reviews">
      <ul className="comments-list">
        {Comentaries.map((Comentary) => (
          <Comment key={Comentary.commentaryId} Comentary={Comentary} />
        ))}
      </ul>
    </div>
  ) : (
    <h2>There aren't any comments yet</h2>
  );
}

{
  /* <div className="product-data-reviews">
                            
                            <ul className="product-data-reviews-lista">
                                {
                                    dataTemp.Comentaries.map(Comentary => (
                                        <li key={useId} className="">
                                            <label htmlFor="">{Comentary.reseña}</label>
                                            <label htmlFor="">{Comentary.puntuación}⭐</label>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div> */
}
