export default function Card({ publication }) {
  return (
    <div className="card" key={publication.publicationId}>
      <div className="cont_imagen">
        <img src={publication.imageUrl} alt="" />
      </div>
      <div className="des">
        <h3>{publication.name}</h3>
        <div className="precio">
          <h3>${publication.price}.00</h3>
          <a href="">
            <i className="fa-solid fa-cart-shopping car_card"></i> Add to Card
          </a>
        </div>
      </div>
    </div>
  );
}
