import cart from "./assets/Carrito.png"

const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="cart-widget"/>
            <br/>
            0
        </div>
    )
}

export default CartWidget