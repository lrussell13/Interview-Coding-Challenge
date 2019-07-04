import React from 'react';
import {Link} from 'react-router-dom';
import './TaskGroup.css'

function idCounter(completedIds, ids){
    let counter = 0;

    for(let i = 0; i < completedIds.length; i++){
        if(ids.includes(completedIds[i])){
            counter++;
        }
    }

    return counter    
}

function TaskGroup(props){
    return (
        <Link className="task-group-link" to={`/groups/${props.name}`}>
        <hr/>
        <div className="task-group">
            <div className="image-container">
                <svg width="7" height="9" xmlns="http://www.w3.org/2000/svg"><path d="M.23.167C.078.278 0 .41 0 .563v7.874c0 .153.077.285.23.396A.911.911 0 0 0 .779 9a.91.91 0 0 0 .547-.167l5.444-3.937C6.923 4.784 7 4.652 7 4.5c0-.152-.077-.284-.23-.396L1.324.167A.91.91 0 0 0 .778 0 .911.911 0 0 0 .23.167z" fill="#CBCBCB" fillRule="evenodd"/></svg>
            </div>
            <div className="group-container">
                <h2>{props.name}</h2>
                <p>{`${idCounter(props.completedIds, props.ids)} out of ${props.ids.length} completed`}</p>
            </div>
        </div>
        </Link>
    )
}

export default TaskGroup;

