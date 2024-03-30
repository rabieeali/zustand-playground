import { useEffect } from 'react'
import { useProductsStore } from '../stores/productsStore'
import ProductCard from './ProductCard'

const ProductsList = () => {
    const { products, fetchProducts, isLoading, error } = useProductsStore()

    useEffect(() => {
        fetchProducts()
    }, [])

    if (isLoading) return <p>loading, please wait ...</p>
    if (error) return <p>{error}</p>

    return (
        <>
            <section>
                <h1 className='display-6 text-center my-4'>Products</h1>
                <div className="row g-3">
                    {products.map(p => (
                        <div key={p.id} className='col-md-3'>
                            <ProductCard product={p} />
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default ProductsList