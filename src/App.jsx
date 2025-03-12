import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Header from './components/Header'
import Products from './components/Products'
import { db } from './data/db'
import ModalDetails from './components/ModalDetails'
import CartModal from './components/CartModal'

function App() {

  const [data, setData] = useState(db);
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [cart, setCart] = useState([]);

  const addToCart = (cartItems) => {
    const itemExist = cart.findIndex(productsItems => productsItems.id === cartItems.id)
    console.log()
    if (itemExist > -1) {
      const updatedCart = [...cart]
      updatedCart[itemExist].quantity++
      setCart(updatedCart)
    } else {
      cartItems.quantity = 1
      setCart([...cart, cartItems])
    }

  }

  const openModal = (product) => {
    setSelectedProduct(product)
    setShowModal(true)
  };

  const closeModal = () => {
    setShowModal(false)
    setSelectedProduct(null)
  };



  return (
    <>
      {/* <!-- Navbar Component --> */}
      <Nav />
      {/* <!-- Header Component --> */}
      <Header />

      {/* <!-- Sección de Productos --> */}
      < section className="py-12" >
        <div className="container-product mx-auto px-5">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Nuestros Productos</h2>

          <div className="fitLis grid grid-cols-2 md:grid-cols-5 gap-y-4">

            {data.map((products) => (
              <Products
                key={products.id}
                products={products}
                onAddToCart={openModal}
              />
            ))}

          </div>
        </div>
      </section >


      {/* <!-- Modal de Login --> */}
      < div id="loginModal" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 hidden" >
        <div className="bg-white rounded-lg p-8 w-full max-w-sm relative">
          <button id="closeModal"
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl">&times;</button>
          <h2 className="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Correo Electrónico</label>
              <input type="email" id="email"
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="tu@correo.com" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Contraseña</label>
              <input type="password" id="password"
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="******" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Entrar</button>
          </form>
        </div>
      </div >

      {/* <!-- Modal del Carrito --> */}
      <CartModal
        cart={cart}
      />

      {showModal && selectedProduct && (
        <>
          <div className="modal_overlay  inset-0 bg-black bg-opacity-50  duration-400 z-50 translate-x-full">
            <div className="img-custom">
              <img id="modalProductImage" src={`/img/${selectedProduct.image}.jpg`} alt={selectedProduct.name}
                className="w-full h-full object-cover" />
            </div>
          </div>

          <div
            id="productModal"
            className="modal-custom 
            top-1/2 
            right-0 
            transform 
            -translate-y-1/2 
            w-[600px] h-[705px] 
            shadow-lg 
            transition-transform 
            duration-300 z-50">

            <ModalDetails
              key={selectedProduct.id}
              selectedProduct={selectedProduct}
              closeModal={closeModal}
              setCart={setCart}
              addToCart={addToCart}
            />
          </div>
        </>
      )}


    </>
  )
}

export default App
