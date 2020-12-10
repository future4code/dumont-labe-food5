import { useState, useEffect } from "react";
import axios from "axios";

export function useRequestData(url, initialState) {
  const [data, setData] = useState(initialState);

    useEffect(() => {
        const token = localStorage.getItem("token")
        axios.get(url, {
            headers: {
               auth: token
            }           
        })
        .then((response) => {     
            setData(response.data.orders);
        })
        .catch((error) => {
            console.log(error.message);
        })
    }, [url]);
    return data;
}

