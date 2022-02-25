import { DataContext } from "./dataContext";
import { useState } from 'react';


function DataProvider({ children }) {
    const [dataState, uploadDataState] = useState(

         [
            {
                 id: 1,
                 name: 'To do',
                 task: [{
                     title: "Titulo prueba tarea",
                     fecha: "24 feb 2022"
                 },
                 {
                 title: "Titulo prueba tarea",
                 fecha: "25 feb 2022"
             },
             {
                title: "Titulo prueba tarea",
                fecha: "25 feb 2022"
            }
             ]
             },
             {
                 id: 2,
                 name: 'In progress',
                 task: [{
                     title: "Titulo prueba tarea",
                     fecha: "24 feb 2022"
                 }]
             },
             {
                 id: 3,
                 name: 'Done',
                 task: [{
                     title: "Titulo prueba tarea",
                     fecha: "24 feb 2022"
                 }]
             }
         ]

    );

    return (
        <DataContext.Provider value={[dataState, uploadDataState]}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;
