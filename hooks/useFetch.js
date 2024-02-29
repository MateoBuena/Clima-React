import { useEffect, useState } from "react"

export const useFetch = (ciudad) => {

    const url = 'https://api.openweathermap.org/data/2.5/weather';

    const API_key = '445dd8bee622c2a4eea59c1b64d0a3d5'

    const [Data, setData] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    const cargarData = async () => {
        try {
            const response = await fetch(`${url}?q=${ciudad}&appid=${API_key}`);
            const data = await response.json();
            setData(data);
            setIsLoading(false);
        } catch (error) {
            console.log(`error: ${error}`);
        }
    }

    useEffect(() => {
        cargarData;
    }, [])



    return {
        Data,
        isLoading
    }
}
