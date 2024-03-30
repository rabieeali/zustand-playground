import { useCartStore } from "../stores/cartStore"

const ProductCard = ({ product }: { product: Product }) => {

    const { addToCart } = useCartStore()

    return (
        <article className="card p-2">
            <div className="d-flex justify-content-between">
                <img
                    width='100px'
                    height='100px'
                    className="rounded-1 shadow-sm"
                    src={product.thumbnail}
                    alt={product.title}
                />
                <div className="d-flex flex-column justify-content-between align-items-end">
                    <h3 className="fs-6 text-end">{product.title}</h3>
                    <button onClick={() => addToCart(product)} style={{ width: '3rem' }} className="btn btn-sm btn-outline-success">
                        <i className="fa fa-shopping-cart"></i>
                    </button>
                </div>
            </div>
        </article>
    )
}

export default ProductCard