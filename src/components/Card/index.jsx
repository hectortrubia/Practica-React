import react from 'react'
import './stylesheet.css'


function Card(props){







    return(
        <react.Fragment>
            <div className='container'>
          <h1 className='title'>{props.title}</h1>
          <div className='circle'></div>
         <p >🗑️</p>
           <p className='subtitle'>#created on{props.date}</p>
           </div>

        




        </react.Fragment>



    )
    }

    export default Card