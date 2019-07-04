import React from 'react';
import TaskGroup from './TaskGroup/TaskGroup';


function ThingsToDo(props){
    return (
        <div className="things-todo-container">
            <h1>Things To Do</h1>
            {props.groups.map(group => <TaskGroup key={group.name} completedIds={props.completedIds} name={group.name} ids={group.ids}/>)}
        </div>
    )
}

export default ThingsToDo;