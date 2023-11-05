export default function CardPurchase({ purchase }) {
  return (
    <li key={purchase.purchaseId} className="card-container">
      <p>{purchase.purchaseDate}</p>
      {purchase.publications.map((publication) => (
        <div key={publication.publicationId}>
          <img
            src={publication.imageUrl}
            alt={publication.name}
            className="img-publication"
          />
          <p>{publication.name}</p>
        </div>
      ))}
    </li>
  );
}
