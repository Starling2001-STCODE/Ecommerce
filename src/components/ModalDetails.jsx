
export default function ModalDetails({ selectedProduct, addToCart, setCart, closeModal }) {


  return (
    <>
      <button
        id="closeProductModal"
        onClick={closeModal}
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl"
      >
        &times;
      </button>

      <div className="p-6 flex flex-col flex-grow overflow-y-auto">
        {/* Información del Producto */}
        <h2 className="text-2xl font-bold mb-2">{selectedProduct.name}</h2>
        <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

        {/* Precio y Stock */}
        <div className="flex items-center mb-4">
          <span className="text-xl font-semibold text-green-600 mr-2">${selectedProduct.price}</span>
          {selectedProduct.oldPrice && (
            <span className="text-sm text-gray-500 line-through">${selectedProduct.oldPrice}</span>
          )}
        </div>
        <div className="mb-4">
          <span className="text-gray-600 font-medium">Stock Disponible:</span>
          <span className="ml-2 text-gray-800 font-semibold">{selectedProduct.stock}</span>
        </div>

        {/* Variaciones */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Variaciones</h3>
          <div className="flex space-x-2 mt-2">
            {selectedProduct.variations?.map((variation, index) => (
              <button key={index} className="px-3 py-1 border rounded hover:bg-gray-100">
                {variation}
              </button>
            ))}
          </div>
        </div>

        {/* Control de Cantidad */}
        <div className="mb-4">
          <label htmlFor="modalQuantityInput" className="block text-gray-600 font-medium mb-2">
            Cantidad
          </label>
          <div className="flex items-center">
            <button
              id="decreaseQty"
              className="bg-gray-200 p-2 rounded hover:bg-gray-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
              </svg>
            </button>
            <input
              id="modalQuantityInput"
              type="number"
              min="1"
              className="w-16 text-center border rounded mx-2"
              defaultValue="1"
            />
            <button
              id="increaseQty"
              className="bg-gray-200 p-2 rounded hover:bg-gray-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>

        {/* Resumen de Precios */}
        <div className="mb-4 space-y-2">
          <div className="flex justify-between">
            <span>Subtotal de artículos:</span>
            <span>${selectedProduct.price}</span>
          </div>
          <div className="flex justify-between">
            <span>Cantidad de artículos:</span>
            <span>1</span>
          </div>
          <div className="flex justify-between">
            <span>Total de artículos:</span>
            <span>${selectedProduct.price}</span>
          </div>
          <div className="flex justify-between">
            <span>Total envío:</span>
            <span>$5.00</span>
          </div>
          <div className="flex justify-between">
            <span>Total antes del impuesto:</span>
            <span>${selectedProduct.price + 5}</span>
          </div>
        </div>

        {/* Botón para Agregar al Carrito */}
        <div className="mt-auto">
          <button
            id="confirmAddToCart"
            onClick={() => addToCart(selectedProduct)}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </>
  )
}