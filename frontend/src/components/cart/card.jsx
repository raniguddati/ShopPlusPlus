import { Link } from "react-router-dom"
import { useCart } from "../../api/addtocart";
import { useState, useRef, useEffect } from "react";

function Cart() {
    const { cart } = useCart();
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="dropdown dropdown-end" ref={dropdownRef}>
            <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="indicator">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="badge badge-sm indicator-item">{totalQuantity}</span>
                </div>
            </div>
            {isOpen && (
                <div className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                    <div className="card-body">
                        <span className="text-lg font-bold">{totalQuantity} Items</span>
                        <span className="text-info">Subtotal: {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}$</span>
                        <Link
                            to="/cart"
                            className="btn btn-primary btn-block"
                            onClick={() => setIsOpen(false)}
                        >
                            View cart
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart