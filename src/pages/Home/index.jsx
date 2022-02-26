import React, { useContext } from "react"
import ContainerTask from "../../components/Container"
import '../Home/style.css';
import { DataContext } from "../../components/context/dataContext";
import { Data1Context } from "../../components/context/data1Contex";
import { Data2Context } from "../../components/context/data2Context";



function HomePage(){

    const [dataState, uploadDataState] = useContext(DataContext)
    const [data1State, uploadData1State] = useContext(Data1Context)
    const [data2State, uploadData2State] = useContext(Data2Context)

    let arrayTask = [
        {
             id: 1,
             name: 'To do',
             task: dataState
         },
         {
             id: 2,
             name: 'In progress',
             task: data1State
         },
         {
             id: 3,
             name: 'Done',
             task: data2State
         }
     ]


   

    return (
        <div className="allContainer">
            {
                arrayTask?.map((e,i) => {
                    const x = i;
                    return <ContainerTask prop={e}></ContainerTask>
                })
            }
        </div>
        
    )
}

export default HomePage;