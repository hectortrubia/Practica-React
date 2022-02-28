import { Data2Context } from './data2Context';
import { useState } from 'react';



function Data2Provider({ children }) {
   
    const [data2State, uploadData2State] = useState([]);

    return (
        <Data2Context.Provider value={[data2State, uploadData2State]}>
            {children}
        </Data2Context.Provider>
    )
}

export default Data2Provider;