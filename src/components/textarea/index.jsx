
import './style.css';
import { useContext, useState } from 'react';
import { DataContext } from '../context/dataContext';
import { Data1Context } from '../context/data1Contex';
import { Data2Context } from '../context/data2Context';



function TextArea(prop) {

  const [dataState, uploadDataState] = useContext(DataContext);
  const [data1State, uploadData1State] = useContext(Data1Context)
  const [data2State, uploadData2State] = useContext(Data2Context)

  console.log(dataState)
  
  console.log(data1State)
  

  const handlerAddTask = e => {
    e.preventDefault()
   
    
    let date = new Date();
    
    

    const newTask = {
      title: e.target.text.value,
      fecha: 'Created  on ' + date.toLocaleDateString()
    }
    console.log(prop.prop)
    if(prop.prop === 1){

      const newTask = {
        title: e.target.text.value,
        fecha: 'Created  on ' + date.toLocaleDateString(),
        status: 'to_do'
      }

      dataState.push(newTask);
      uploadDataState(dataState)   // aqui actualiza la parte 1 //
      prop.cancel(false)
    } else if(prop.prop === 2){
      const newTask1 = {
        title: e.target.text.value,
        fecha: 'Created  on ' + date.toLocaleDateString(),
        status: 'in_progress'
      }
      data1State.push(newTask1);
      uploadData1State(data1State);
      prop.cancel(false)
    } else if(prop.prop === 3){
      const newTask2 = {
        title: e.target.text.value,
        fecha: 'Created  on ' + date.toLocaleDateString(),
        status: 'done'
      }
      data2State.push(newTask2);
      uploadData2State(data2State);
      prop.cancel(false)
    }
  
  }

  
  const handlerCancelTask = e => {
    e.preventDefault()
    prop.cancel(false)
    console.log(prop.cancel)
  
  }



  return (
    <form onSubmit={handlerAddTask}className="ContTextarea">

      <input name="text" className='textareainput' rows="10" cols="50"></input>

      <div className="buttoncontainer">
        <button className='buttonadd'type="submit" >Add</button>
        <button className='buttoncancel'onClick={handlerCancelTask}>Cancel</button>

      </div>
    </form>
  );
}


export default TextArea;