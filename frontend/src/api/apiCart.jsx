

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

console.log(import.meta.env);


export const getCartData = async (cartData) => {
    console.log("this is motor Date :  " + cartData);
    try {
        const res = await fetch(`${BASE_URL}/carts`);
        const data = await res.json(); // Wait for the Promise to resolve

        console.log("Get data quantity : " + data.quantity);
        return data;
    } catch (error) {
        console.error("Error fetching motors:", error);
        throw error;
    }
};

