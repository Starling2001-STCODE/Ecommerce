
export default function Nav() {

    return (
        <nav className="bg-white shadow fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* <!-- Logo --> */}
                    <div className="flex items-center">
                        <img src="public/img/Logo-0.png" alt="Logo" className="w-20 h-20 object-contain" />
                    </div>
                    {/* <!-- Enlaces de navegación --> */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#" className="text-gray-600 hover:text-gray-800">Inicio</a>
                        <a href="#" className="text-gray-600 hover:text-gray-800">Productos</a>
                        <a href="#" className="text-gray-600 hover:text-gray-800">Contacto</a>
                        {/* <!-- Dropdown de Categorías --> */}
                        <div className="dropdown">
                            <button className="text-gray-600 hover:text-gray-800 focus:outline-none">Categorías</button>
                            <div className="dropdown-content">
                                <label>
                                    <input type="checkbox" className="filter-checkbox mr-2" value="ropa" /> Ropa
                                </label>
                                <label>
                                    <input type="checkbox" className="filter-checkbox mr-2" value="tecnologia" /> Tecnología
                                </label>
                                <label>
                                    <input type="checkbox" className="filter-checkbox mr-2" value="electronica" /> Electrónica
                                </label>
                                <label>
                                    <input type="checkbox" className="filter-checkbox mr-2" value="accesorios" /> Accesorios
                                </label>
                                <button id="clearFiltersDropdown">Limpiar filtros</button>
                            </div>
                        </div>
                        <div className="relative">
                            <input type="text" placeholder="Buscar..."
                                className="border rounded-full py-1 px-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <svg className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1 0 9 16.65a7.5 7.5 0 0 0 7.65 0z"></path>
                            </svg>
                        </div>
                    </div>
                    {/* <!-- Botones: Login y Carrito --> */}
                    <div className="flex items-center space-x-4">
                        <button id="loginBtn" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</button>
                        <button id="cartBtn" className="relative p-2 rounded-full hover:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7.5M17 13l1.5 7.5M6 19a1 1 0 100 2 1 1 0 000-2zm12 0a1 1 0 100 2 1 1 0 000-2z" />
                            </svg>
                            <span id="cartCount"
                                className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}