import React from 'react';
import './Task.css'

function returnImage(completedIds, taskId){
    if(completedIds.includes(taskId)){
        return '<svg width="21" height="21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="a" d="M0 0h21v21H0z"/></defs><g fill="none" fill-rule="evenodd"><use fill="#9DE1B6" xlink:href="#a"/><path stroke="#FFF" stroke-width="4" d="M2 2h17v17H2z"/><path stroke="#E2E2E2" d="M.5.5h20v20H.5z"/></g></svg>'
    }
    return '<svg width="21" height="21" xmlns="http://www.w3.org/2000/svg"><path d="M.5.5h20v20H.5z" stroke="#E2E2E2" fill="none" fillRule="evenodd"/></svg>'
}

function Task(props){
    return (
        <div onClick={() => props.onTaskToggle(props.task.id)}>
            <hr/>
            <div className="task-container">
            <div className="complete-image" dangerouslySetInnerHTML={{ __html: returnImage(props.completedIds, props.task.id)}} />
                <h2>{props.task.task}</h2>
            </div>
        </div>
    )
}

export default Task;