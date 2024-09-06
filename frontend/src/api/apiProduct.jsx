import axios from 'axios';

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

console.log(import.meta.env);

export const getMotorsData = async (motorData) => {
    console.log("this is motor Date :  " + motorData);
    try {
        // const config = { params: motorData };
        // const response = await axios.get(`${BASE_URL}/motors`, config);
        const res = await fetch(`${BASE_URL}/product/motors`);
        const data = await res.json(); // Wait for the Promise to resolve

        console.log(BASE_URL);
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching motors:", error);
        throw error;
    }
};

export const getAccessoriesData = async (accessoriesData) => {
    try {
        const config = { params: accessoriesData };
        const response = await axios.get(`${BASE_URL}/product/accessories`, config);
        return response.data;
    } catch (error) {
        console.error("Error fetching accessories:", error);
        throw error;
    }
};


