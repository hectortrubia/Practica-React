

import React from 'react';

import './style.css';
import { useContext, useState } from 'react';
import { DataContext } from '../context/dataContext';



function TextArea(prop) {

  const [dataState, uploadDataState] = useContext(DataContext);

  console.log(dataState)
 

  const handlerAddTask = e => {
    e.preventDefault()
  
    let date = new Date();
    console.log(prop)
  

    if(prop.prop === 1){

      const newTask = {
        title: e.target.text.value,
        fecha: 'Created  on ' + date.toLocaleDateString(),
        status: 'to_do',
        num: dataState.length +1
      }

      dataState.push(newTask);
      uploadDataState([...dataState])   // aqui actualiza la parte 1 //
      prop.cancel(false)

    } else if(prop.prop === 2){
      const newTask1 = {
        title: e.target.text.value,
        fecha: 'Created  on ' + date.toLocaleDateString(),
        status: 'in_progress',
        num: dataState.length +1
      }
      dataState.push(newTask1);
      uploadDataState([...dataState]);
      prop.cancel(false)


    } else if(prop.prop === 3){
      const newTask2 = {
        title: e.target.text.value,
        fecha: 'Created  on ' + date.toLocaleDateString(),
        status: 'done',
        num: dataState.length +1
      }
      dataState.push(newTask2);
      uploadDataState([...dataState]);
      prop.cancel(false)
    }
  
  }

  
  const handlerCancelTask = e => {
    e.preventDefault()
    prop.cancel(false)
  }



    return (

      <React.Fragment>
       

    <form onSubmit={handlerAddTask}className="ContTextarea">

      <input name="text" className='textareainput' rows="10" cols="10" required></input>

      <div className="buttoncontainer">
        <button className='buttonadd'type="submit" >Add</button>
        <button className='buttoncancel'onClick={handlerCancelTask}>Cancel</button>

      </div>
    </form>




    
       
        </React.Fragment>
        )
        }
        


          export default TextArea