import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <div>


            <nav>
                <h1>
                    Almendro
                </h1>
                <h3>
                    Productos Naturales
                </h3>
                <div>
                    <button>Frutos Secos</button>
                    <button>Aceites</button>
                    <button>Mixs</button>
                    <button>Otros</button>
                </div>
                <CartWidget/>

            </nav>
        </div>

    )
}
export default NavBar