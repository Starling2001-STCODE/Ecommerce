export default function Products({ products, openModal }) {

    const { id, name, image, description, price, stock } = products

    return (
        <div className="product-card" data-category="ropa" data-id={products.id} data-name={products.name} data-price={products.price}>
            <div className="image-container">
                <img src={`/img/${products.image}.jpg`} alt={products.name} className="product-image" />
                <div className="image-overlay">
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <p>${price}</p>
                    <button className="mt-2 p-2 rounded-full hover:bg-black" onClick={() => openModal(products)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7.5M17 13l1.5 7.5M6 19a1 1 0 100 2 1 1 0 000-2zm12 0a1 1 0 100 2 1 1 0 000-2z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="product-info p-2">
                <p className="text-gray-800 text-sm">{description}</p>
                <div className="info-row flex justify-between items-center">
                    <span>Stock: <span className="stock">{stock}</span></span>
                    <button className="add-to-cart p-1 hover:bg-gray-200 rounded" onClick={() => openModal(products)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7.5M17 13l1.5 7.5M6 19a1 1 0 100 2 1 1 0 000-2zm12 0a1 1 0 100 2 1 1 0 000-2z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}