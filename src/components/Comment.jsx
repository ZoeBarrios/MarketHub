import { useQuery } from "react-query";
import { getUser } from "../services/users";

export default function Comment({ Comentary }) {
  const { data } = useQuery(["Comentaries", Comentary.userId], () =>
    getUser(Comentary.userId)
  );
  return (
    <li key={Comentary.commentaryId} className="comentarySection-values">
      <div className="container-info-comment">
        <p>{data?.name}</p>
        <p>{new Date(Comentary.createdDate).toLocaleDateString()}</p>
        <p>{Comentary.rating}⭐</p>
      </div>

      <div>
        <p>{Comentary.text}</p>
      </div>
    </li>
  );
}
