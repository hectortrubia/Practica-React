import react from 'react'
import './style.css'


function Card(props){
 const handlerdelete = e =>{
      // e.props.splice()
      console.log(e.target)

  }

  const changeStatus = e => {
    e.preventDefault()
    console.log(e.target)
  }


    return(
        <react.Fragment>
       
            <div className='container-note'>
          <h1 className='title-note'> {props.info.title}</h1>
          <button className={props.info.status} onClick={changeStatus}></button>
         <p  className='delete-note' onClick={handlerdelete} >🗑️ </p>
           <p className='subtitle-note'>#Created on {props.info.fecha}</p>
           </div>
        
        </react.Fragment>



    )
    }

    export default Card