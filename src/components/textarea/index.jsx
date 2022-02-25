import { useState } from 'react';
import React from 'react';
import './style.css';


function TextArea() {



    return (

      <React.Fragment>
        <div className="ContTextarea">

          <textarea name="textValue" className='textareainput' rows="10" cols="50"></textarea>

          <div className="buttoncontainer">
            <button className='buttonadd'>Add</button>
            <button className='buttoncancel' >Cancel</button>

          </div>
        </div >
        </React.Fragment>
        )
        }
        


          export default TextArea