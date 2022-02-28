import { Data1Context } from './data1Contex';
import { useState } from 'react';



function Data1Provider({ children }) {
   
    const [data1State, uploadData1State] = useState([]);

    return (
        <Data1Context.Provider value={[data1State, uploadData1State]}>
            {children}
        </Data1Context.Provider>
    )
}

export default Data1Provider;
