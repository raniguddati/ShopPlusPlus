import axios from 'axios';

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

export const login = async (email, password, address, phoneNumber) => {

    try {
        const res = await axios.post(`${BASE_URL}/auth/login`, {

            email,
            password,
            address,
            phoneNumber

        });
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        return res.data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
}

export const register = async (name, email, password, address, phoneNumber) => {
    try {
        const res = await axios.post(`${BASE_URL}/auth/signup`, {
            name,
            email,
            password,
            address,
            phoneNumber
        });

        return res.data;
    } catch (error) {
        console.error("Error signing up:", error);
        throw error;
    }
}

export const logout = async () => {
    try {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    } catch (error) {
        console.error("Error logging out:", error);
        throw error;
    }
}
