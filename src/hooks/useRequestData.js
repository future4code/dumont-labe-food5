import { useState, useEffect } from 'react';
import axios from 'axios'; 

export function useRequestData(url, initialState){
    const [data, setData] = useState(initialState);

    useEffect(() => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJIdHltV2RWa3RTb3ZYSVlsSkJjIiwibmFtZSI6IlRob21hcyIsImVtYWlsIjoidGhvbWFzQGdtYWlsLmNvbSIsImNwZiI6IjEyMy4xMTEuMTExLTExIiwiaGFzQWRkcmVzcyI6ZmFsc2UsImlhdCI6MTYwNzQ2MTg5OX0.XhXCfENzXaz9A4_9-ODppvbMFfrIUz3SiSOwTZZ6Leo"

        axios.get(url, {
            headers: {
                Authorization: token
            }           
        })
        .then((response) => {     
            setData(response.data);
        })
        .catch((error) => {
            console.log(error.message);
        })
    }, [url]);
    return data;
}