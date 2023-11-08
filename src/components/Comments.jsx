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
    <div className="product-data-reviews">
      <ul>
        {Comentaries.map((Comentary) => (
          <li key={Comentary.commentaryId} className="comentarySection-values">
            <label htmlFor="">{Comentary.text}</label>
            <label htmlFor="">{Comentary.raiting}⭐</label>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <h2>There aren't any comments yet</h2>
  );
}


{/* <div className="product-data-reviews">
                            
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
                        </div> */}