import react from 'react';
import './style.css';


function TextArea(prop) {

  const handlerAddTask = e => {
    e.preventDefault()
    console.log(e.target.text.value)
  
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