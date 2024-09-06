import { createContext, useContext, useState, useEffect } from 'react';
import { getCartData } from './apiCart';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCartData();
            setCart(data);
        };

        fetchData();
    }, []);

    // Function to check if user is logged in
    const checkLoginStatus = () => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    };

    useEffect(() => {
        checkLoginStatus();
    }, []);

    const quantity = 1;
    const addToCart = async (product) => {
        // Logic to add product to cart
        // This could involve calling an API and then updating local state
        // For simplicity, we'll just update the local state here

        if (!isLoggedIn) {
            alert("Please log in to add items to your cart.");
            return; // Exit the function if not logged in
        }
        const response = await axios.get(`${BASE_URL}/carts`);

        const checkId = response.data.find((item) => item.id === product.id);
        console.log(product.id);
        const cartId = response.data.length;
        const autocartId = cartId + 1;
        // After updating the cart, calculate the total price

        try {
            if (checkId) {
                const newCard = { ...checkId, quantity: checkId.quantity };
                console.log(`Product with ID ${newCard.quantity} already exists in the cart`);
                console.log(newCard.quantity)
                newCard.quantity += 1;
                console.log(newCard);
                const res = await fetch(`${BASE_URL}/carts/${newCard.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newCard),
                });

                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }

                const data = await res.json();
                console.log("Cart data updated successfully:", data);
                return data;
            } else {
                const fullProductDetails = {
                    ...product,
                    autocartId,
                    quantity,
                };
                const res = await fetch(`${BASE_URL}/carts`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(fullProductDetails),
                });

                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }

                const data = await res.json();
                console.log("New cart data added successfully:", data);
                return data;
            }
        } catch (error) {
            console.error(`Error adding card product: ${error}`);
        }


        setCart([...cart, product]);

    };
    const removeCartItem = async (itemId) => {
        try {
            const res = await fetch(`${BASE_URL}/carts/${itemId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();
            console.log("Cart item removed successfully:", data);
            // Update the local state to reflect the removal
            setCart(cart.filter(item => item.id !== itemId));
        } catch (error) {
            console.error(`Error removing cart item: ${error}`);
        }
    };


    return (
        <CartContext.Provider value={{ cart, addToCart, removeCartItem }}>
            {children}
        </CartContext.Provider>
    );
};