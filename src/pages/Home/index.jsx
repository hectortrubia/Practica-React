import React, { useContext, useEffect, useState } from "react"
import ContainerTask from "../../components/Container"
import '../Home/style.css';
import { DataContext } from "../../components/context/dataContext";



function HomePage(){

    const [dataState] = useContext(DataContext)
    
    const [arrayFiltred, uploadFiltred] = useState(dataState)
    
    useEffect(()=> {
        uploadFiltred(dataState)
    }, [dataState])

    const handleFilter = e => {
        if(e.target.value != ''){
            console.log('hola')
        let newFilter = dataState?.filter(ob => ob.title.toLowerCase().includes(e.target.value.toLowerCase()))
        uploadFiltred(newFilter)
        console.log(arrayFiltred)}
    else {
        uploadFiltred(dataState)
    }} 

    let arrayTask = [
        {
             id: 1,
             name: 'To do',
            task: arrayFiltred?.filter(e => e.status === "to_do")
         },
         {
             id: 2,
             name: 'In progress',
             task: arrayFiltred?.filter(e => e.status === "in_progress")
         },
         {
             id: 3,
             name: 'Done',
             task: arrayFiltred?.filter(e => e.status === "done")
         }
     ]

    
   

    return (
        <React.Fragment>
        <input type='text' onChange={handleFilter}></input>
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