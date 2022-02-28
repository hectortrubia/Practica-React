import React, { useContext, useEffect } from "react"
import ContainerTask from "../../components/Container"
import '../Home/style.css';
import { DataContext } from "../../components/context/dataContext";



function HomePage(){

    const [dataState] = useContext(DataContext)
    
    


    let arrayTask = [
        {
             id: 1,
             name: 'To do',
            task: dataState?.filter(e => e.status === "to_do")
         },
         {
             id: 2,
             name: 'In progress',
             task: dataState?.filter(e => e.status === "in_progress")
         },
         {
             id: 3,
             name: 'Done',
             task: dataState?.filter(e => e.status === "done")
         }
     ]

    
   

    return (
        <React.Fragment>
        <input type='text' ></input>
        <div className="allContainer">
            {
                arrayTask?.map((e,i) => {
                    const x = i;
                    return <ContainerTask key={i} prop={e}></ContainerTask>
                })
            }
        </div>
        </React.Fragment>
    )
}

export default HomePage;