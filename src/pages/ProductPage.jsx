import { BotonIcono } from "../components/BotonIcono"
import { FUNCTION_BTN } from "../utils/constants"
import { useId } from "react"
import '../../public/css/ProductPage.css'








export const ProductPage = () => {
    // TEMP 
    let dataTemp = {
        PublicationId: 1,
        Name: 'Zapatos elegantes',
        Description: 'Assumenda iusto unde officia eum. Incidunt molestiae perspiciatis est commodi alias laboriosam dolor et libero. Et voluptatem repudiandae non eum quibusdam ipsam quis.Assumenda iusto unde officia eum. Incidunt molestiae perspiciatis est commodi alias laboriosam dolor et libero. Et voluptatem repudiandae non eum quibusdam ipsam quis.Assumenda iusto unde officia eum. Incidunt molestiae perspiciatis est commodi alias laboriosam dolor et libero. Et voluptatem repudiandae non eum quibusdam ipsam quis123456789123',
        Price: '$8479.85',
        Stock: 116,
        UserId: 15,
        CategoryId: 3,
        ImageUrl: '/img/test.jpg',
        Comentaries: [
            { reseña: "Interesante, pero un poco confuso.", puntuación: Math.floor(Math.random() * 5) + 1 },
            { reseña: "Bueno, pero podría ser mejor.", puntuación: Math.floor(Math.random() * 5) + 1 },
            { reseña: "Divertido, pero demasiado corto.", puntuación: Math.floor(Math.random() * 5) + 1 },
            { reseña: "Original, pero no tan emocionante.", puntuación: Math.floor(Math.random() * 5) + 1 },
            { reseña: "Informativo, pero algo aburrido.", puntuación: Math.floor(Math.random() * 5) + 1 },
            { reseña: "Recomendable, pero un poco caro.", puntuación: Math.floor(Math.random() * 5) + 1 },
            { reseña: "Entretenido, pero predecible en partes.", puntuación: Math.floor(Math.random() * 5) + 1 },
            { reseña: "Creativo, pero falta profundidad.", puntuación: Math.floor(Math.random() * 5) + 1 },
            { reseña: "Diferente, pero no impresionante.", puntuación: Math.floor(Math.random() * 5) + 1 },
            { reseña: "Interesante, pero algo confuso.", puntuación: Math.floor(Math.random() * 5) + 1 },
            { reseña: "Entretenido, pero demasiado largo.", puntuación: Math.floor(Math.random() * 5) + 1 },
            { reseña: "Intrigante, pero desenlace decepcionante.", puntuación: Math.floor(Math.random() * 5) + 1 },
            { reseña: "Único, pero podría ser mejor.", puntuación: Math.floor(Math.random() * 5) + 1 },
            { reseña: "Atractivo, pero algo repetitivo.", puntuación: Math.floor(Math.random() * 5) + 1 },
            { reseña: "Sorprendente, pero con fallos notables.", puntuación: Math.floor(Math.random() * 5) + 1 },
            { reseña: "Fascinante, pero ritmo irregular.", puntuación: Math.floor(Math.random() * 5) + 1 },
            { reseña: "Prometedor, pero no cumple totalmente.", puntuación: Math.floor(Math.random() * 5) + 1 },
            { reseña: "Pintoresco, pero falta profundidad.", puntuación: Math.floor(Math.random() * 5) + 1 },
            { reseña: "Innovador, pero no del todo.", puntuación: Math.floor(Math.random() * 5) + 1 },
            { reseña: "Diverso, pero no tan memorable.", puntuación: Math.floor(Math.random() * 5) + 1 }]
    }
    return (
        <>
            <main>
                <section className="productPage-hearder">
                    <BotonIcono functionBtn={FUNCTION_BTN.VOLVER} />
                    <BotonIcono functionBtn={FUNCTION_BTN.FAVORITO} />
                </section>
                <section className="productPage-product">
                    <div className="productPage-product-1stSection">
                        <img src={dataTemp.ImageUrl} alt={dataTemp.Name} />
                        <h3>{dataTemp.Name}</h3>
                        <p className="productPage-product-description">{dataTemp.Description}</p>
                        <h3 className="ReviewTitle">Reseña</h3>
                        <section className="comentarySection">
                            <ul >
                                {
                                    dataTemp.Comentaries.map(Comentary => (
                                        <li key={useId} className="comentarySection-values">
                                            <label htmlFor="">{Comentary.reseña}</label>
                                            <label htmlFor="">{Comentary.puntuación}⭐</label>
                                        </li>
                                    ))
                                }
                            </ul>
                        </section>
                    </div>
                    <section className="productPage-product-price">
                        <label htmlFor={dataTemp.Name}>{dataTemp.Price}</label>
                        <button>Add to Card</button>
                    </section>
                </section>
            </main>
        </>
    )

}

