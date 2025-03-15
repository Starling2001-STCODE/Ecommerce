import { useMemo } from "react"

export default function CartModal({ cart, increaseQuantityProd }) {
  const isEmpty = useMemo(() => cart.length === 0, [cart])
  return (
    <>
      < div id="cartModal" className="modal_cart inset-0 flex items-center justify-center ">
        <div className=" bg-white rounded-lg p-6 w-full max-w-md relative">
          <button id="closeCartModal"
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl">&times;</button>
          <h2 className="text-2xl font-bold mb-4 text-center">Carrito de Compras</h2>
          <div id="cartItems" className="space-y-4">
            {/* <!-- Se inyectarán los productos agregados --> */}
            {isEmpty ? (<p className="text-center text-gray-600">No hay productos en el carrito.</p>) : (
              cart.map((cart) => (
                <div key={cart.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{cart.name}</p>
                    <p className="text-gray-600">${cart.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => increaseQuantityProd(cart.id, "decrease")}
                      className="bg-gray-200 p-1 rounded hover:bg-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                      </svg>
                    </button>
                    <span>{cart.quantity}</span>
                    <button
                      onClick={() => increaseQuantityProd(cart.id, "increase")}
                      className="bg-gray-200 p-1 rounded hover:bg-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))
            )}

          </div>
          <div className="mt-6 text-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Proceder al Pago</button>
          </div>
        </div>
      </div >
    </>
  )
}

