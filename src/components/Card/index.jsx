import react from 'react'
import './style.css'


function Card(props,i){
//    const handlerdelete = e =>{
//        props[i].title === title ? props.pop() : ""

//    }








    return(
        <react.Fragment>
            <div className='container'>
          <h1 className='title'> titulo tarea{props.title}</h1>
          <div className='circle'></div>
         {/* <p onClick={handlerdelete} >🗑️ </p> */}
          { <p>🗑️ </p> }
           <p className='subtitle'>#created on{props.date}</p>
           </div>

        




        </react.Fragment>



    )
    }

    export default Card