import { DataContext } from "./dataContext";
import { useState } from 'react';



function DataProvider({ children }) {
   
    const [dataState, uploadDataState] = useState([]);

    return (
        <DataContext.Provider value={[dataState, uploadDataState]}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;
