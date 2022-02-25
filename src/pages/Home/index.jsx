import React, { useContext } from "react"
import ContainerTask from "../../components/Container"
import '../Home/style.css';



function HomePage(){

    const arrayProv = [
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

    return (
        <div className="allContainer">
            {
                arrayProv.map((e,i) => {
                
                    return <ContainerTask key={i} prop={e}></ContainerTask>
                })
            }
        
        </div>
        
    )
}

export default HomePage;