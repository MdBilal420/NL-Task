import React, { createContext,useEffect,useState } from 'react';
import axios from 'axios';


export const ApiContext = createContext();

export const ApiContextProvider = (props) => {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get(
            `https://nl-static-site-assets.s3.ap-south-1.amazonaws.com/reports.json`
        )
        .then((response) => {
            console.log(response.data);
            setData(response.data)
        })
        .catch((error) => console.log(error));
    }, []);

    return (
        <ApiContext.Provider value={{data}}>
            {props.children}
        </ApiContext.Provider>
    );
}