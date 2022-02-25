import { useState } from 'react';
import '../Container/style.css'
import TextArea from '../textarea';

function ContainerTask(prop) {

    console.log(prop.name)
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
                   newTask ? <div className='task'><TextArea></TextArea></div> : <></>
                }
                {
                    // MAP para las task que se creen, el length de este array sera el mismo que el prop.prop.task.length
                }


            </div>
        </section>

    )
}

export default ContainerTask;
