import react from 'react';
import './style.css';


function TextArea() {


  return (
    <div className="ContTextarea">

      <textarea name="textValue" className='textareainput' rows="10" cols="50"></textarea>

      <div className="buttoncontainer">
        <button className='buttonadd'>Add</button>
        <button className='buttoncancel'>Cancel</button>

      </div>
    </div >
  );
}


export default TextArea;