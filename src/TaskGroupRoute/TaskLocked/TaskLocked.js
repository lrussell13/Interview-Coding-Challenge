import React from 'react';
import './TaskLocked.css';

function TaskLocked(props){
    return (
        <div className="task-locked">
            <hr/>
            <div className="task-locked-container">
            <div className="task-locked-image-container">
                <svg width="12" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 7V4a4 4 0 1 1 8 0v3h1.5c.276 0 .5.222.5.51v7.98c0 .282-.229.51-.5.51H.5a.501.501 0 0 1-.5-.51V7.51C0 7.228.229 7 .5 7H2zm4.7 4.827a1.5 1.5 0 1 0-1.4 0v1.683c0 .275.226.49.505.49h.39c.286 0 .505-.22.505-.49v-1.683zM3.125 7h5.75V4c0-1.519-1.287-2.75-2.875-2.75S3.125 2.481 3.125 4v3z" fill="#9B9B9B" fillRule="nonzero"/></svg>   
            </div> 
            <h2>{props.task.task}</h2>
            </div>
        </div>
    )
}

export default TaskLocked;