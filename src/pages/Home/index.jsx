import React from "react"
import ContainerTask from "../../components/Container"
import '../Home/style.css'


function HomePage(){

    const arrayProv = [
       {
            id: 1,
            name: 'To do',
            task: []
        },
        {
            id: 2,
            name: 'In progress',
            task: []
        },
        {
            id: 3,
            name: 'Done',
            task: []
        }
    ]

    return (
        <div className="allContainer">
            {
                arrayProv.map((e,i) => {
                    console.log(e);
                    return <ContainerTask key={i} prop={e}></ContainerTask>
                })
            }
        </div>
    )
}

export default HomePage;