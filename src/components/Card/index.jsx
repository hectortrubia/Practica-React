import react from 'react'
import './style.css'
import { useContext, useState } from 'react';
import { DataContext } from '../context/dataContext';

function Card(props){

  const [dataState, uploadDataState] = useContext(DataContext);

 const handlerdelete = e =>{
      // e.props.splice()
      console.log(props.info.num)
      
      
  }

  const changeStatus = e => {
  console.log(props.info)
    
    console.log(props.info.num)
    if(props.info.status === 'to_do'){
    dataState.every(element => element.num === props.info.num ? element.status =  'in_progress' : element.status = element.status)

    uploadDataState([...dataState])
    console.log(dataState)
    console.log('hola')
    } else if(props.info.status === 'in_progress'){
    dataState.every(element => element.num === props.info.num ? element.status =  'done' : element.status = element.status)
    uploadDataState([...dataState])
    console.log('hola')
    }
    console.log(dataState)



  }


    return(
        <react.Fragment>
       
            <div className='container-note'>
          <h1 className='title-note'> {props?.info.title}</h1>
          <button className={props?.info.status} onClick={changeStatus}></button>
         <p  className='delete-note' onClick={handlerdelete} >🗑️ </p>
           <p className='subtitle-note'>#Created on {props?.info.fecha}</p>
           </div>
        
        </react.Fragment>



    )
    }

    export default Card