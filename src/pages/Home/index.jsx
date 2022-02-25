import React, { useContext } from "react"
import ContainerTask from "../../components/Container"
import '../Home/style.css';
import { DataContext } from "../../components/context/dataContext";



function HomePage(){

    const [dataState, uploadDataState] = useContext(DataContext)

    console.log(dataState)


   

    return (
        <div className="allContainer">
            {
                dataState.map((e,i) => {
                
                    return <ContainerTask key={i} prop={e}></ContainerTask>
                })
            }
            {
                dataState.map(e => {console.log(e)})

            }
        
        </div>
        
    )
}

export default HomePage;