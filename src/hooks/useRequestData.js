import { useState, useEffect } from 'react';
import axios from 'axios'; 

export function useRequestData(url, initialState){
    const [data, setData] = useState(initialState);

    useEffect(() => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InMxMmpTMkZkQ3V6RlVLSENrTzdyIiwibmFtZSI6IkdydXBvIDUiLCJlbWFpbCI6InRlc3RlQGdydXBvNS5jb20uYnIiLCJjcGYiOiI5OTkuOTk5Ljg4OC4wMCIsImhhc0FkZHJlc3MiOmZhbHNlLCJpYXQiOjE2MDc0NDEyOTV9.I-t5u7FE_HYQm83Iv_Zk9tMBh-R_99PLMCuUwtVrcRU"

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