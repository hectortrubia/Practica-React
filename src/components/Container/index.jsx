import { useState } from 'react';
import '../Container/style.css'

import Card from '../Card';

import TextArea from '../textarea';


function ContainerTask(prop) {

  
    const [newTask, uploadNewTask] = useState(false);

    const handleNewTask = e => {
        if(newTask === false){
            uploadNewTask(true)
        } else {
            uploadNewTask(false)
        }
    }

    return (

        <section className='ContTask'>
            <div className="headerContTask">
                <div className='numberContTask'>
                    <p>{prop.prop.task.length}</p>
                 </div>
                <p className='titleContTask'>{prop.prop.name}</p>
                <button className='plusContTask' onClick={handleNewTask}>+</button>
            </div>
            <div className="ContainerTask">
                {
                   newTask ? <div className='task'><TextArea cancel={uploadNewTask}></TextArea></div> : <></>
                }
                {
                    prop.prop.task.length != 0 ? prop.prop.task.map((e,i)=> <Card key={i} info={e}></Card>   ) : <></>
                    
                    // MAP para las task que se creen, el length de este array sera el mismo que el prop.prop.task.length
                }
     

            </div>
        </section>

    )
}

export default ContainerTask;
