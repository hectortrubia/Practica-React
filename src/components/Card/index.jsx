import react from 'react'
import './style.css'


function Card(props){
 const handlerdelete = e =>{
       e.props.splice()

  }



    return(
        <react.Fragment>
            <div className='container-note'>
          <h1 className='title-note'> titulo tarea{props.title}</h1>
          <div className='circle-note'></div>
         <p  className='delete-note' onClick={handlerdelete} >🗑️ </p>
           <p className='subtitle-note'>#created on{props.date}</p>
           </div>

        




        </react.Fragment>



    )
    }

    export default Card