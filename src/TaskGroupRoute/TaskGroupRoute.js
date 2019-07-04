import React from 'react';
import Task from './Task/Task';
import TaskLocked from './TaskLocked/TaskLocked';
import { Link } from 'react-router-dom'
import './TaskGroupRoute.css'

function findGroup(id, groups){
    return groups.find(group => group.name === id)
}

function filterTasks(id, tasks){
    return tasks.filter(task => task.group === id)
}

function TaskGroupRoute(props){
    let currentGroup = findGroup(props.id, props.groups);
    let currentTasks = filterTasks(props.id, props.tasks);

    return (
        <div className="task-group-container">
            <div className="title-container">
                <h1>{currentGroup.name}</h1>
                <Link className="all-groups" to='/'><h3>All Groups</h3></Link>
            </div>
            {currentTasks.map((task) => {
                if(task.dependencyIds.length <= 0 || (task.dependencyIds.every(id => props.completedIds.indexOf(id) >= 0))){
                    return <Task completedIds={props.completedIds} onTaskToggle={props.onTaskToggle} key={task.id} task={task}/>
                }
                return <TaskLocked key={task.id} task={task}/>
            })}
            
        </div>
    )
}

export default TaskGroupRoute;