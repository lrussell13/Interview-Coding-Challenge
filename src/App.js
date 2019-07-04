import React, { Component } from 'react'
import './App.css'
import ThingsToDo from './ThingsToDo/ThingsToDo';
import { Route, Switch } from 'react-router-dom'
import TaskGroupRoute from './TaskGroupRoute/TaskGroupRoute';

export default class App extends Component {
  state = {
    groups: [],
    tasks: [],
    completedIds: []
  }

  componentWillMount(){
    fetch(`http://localhost:3000/data.json`)
    .then(response => response.json())
    .then(responseJson => this.setState({
      groups: responseJson.groups,
      tasks: responseJson.tasks,
      completedIds: responseJson.completedIds
    }))
  }

  onTaskToggle = (id) => {
    let newCompleteIds = [];
    if(this.state.completedIds.includes(id)){
      let index = this.state.completedIds.indexOf(id)
      newCompleteIds = this.state.completedIds
      newCompleteIds.splice(index, 1);

      for(let i in this.state.tasks){
        if(this.state.tasks[i].dependencyIds.length > 0){
          if(this.state.tasks[i].dependencyIds.includes(id)){
           if(this.state.completedIds.includes(this.state.tasks[i].id)){
            let ind = this.state.completedIds.indexOf(this.state.tasks[i].id)
            newCompleteIds.splice(ind, 1);
           }
          }
        }
      }
    
    } else {
      newCompleteIds = [...this.state.completedIds, id]
    }

    this.setState({completedIds: newCompleteIds});
  }
  
  render() {
    return (
      <div className="app">
      <Switch>
        <Route exact path='/' component={() => <ThingsToDo groups={this.state.groups} completedIds={this.state.completedIds}/>} />
        <Route exact path='/groups/:id' component={(props) => <TaskGroupRoute onTaskToggle={this.onTaskToggle} id={props.match.params.id} completedIds={this.state.completedIds} groups={this.state.groups} tasks={this.state.tasks}/>}/>
      </Switch>
      </div>
    )
  }
}
