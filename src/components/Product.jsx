import ItemCount from "./ItemCount"

function Product({product}) {
    const {title, img, price} = product
    return (
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Mouse" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Precio: ${price}</p>
                    <div className="card-actions justify-end">
                        <ItemCount/>
                    <button className="btn btn-comprar">comprar</button>
                    </div>
                </div>
            </div>
    )
}
export default Product