export default function CardPublication({ publication }) {
  return (
    <li key={publication.publicationId} className="card-container">
      <img
        src={publication.imageUrl}
        alt={publication.name}
        className="img-publication"
      />
      <p>{publication.name}</p>
      <p>Precio: {publication.price}</p>
    </li>
  );
}
