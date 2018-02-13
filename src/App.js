import React, { Component } from 'react';
import './App.css';
import Project from './components/Project';
import AddProject from './components/AddProject';
import uuid from 'uuid';
import $ from 'jquery';
import Users from './components/Users';
// import UsersList from './components/UsersList';



class App extends Component {
    constructor(){
        super();
        this.state = {
            projects: [],
            users: []
        }
    }

    getUsers(){

        $.ajax({
            url:'https://jsonplaceholder.typicode.com/users',
            dataType:'json',
            cache: false,
            success: function (data) {
                this.setState({users: data}, function(){
                    console.log(this.state);
                });
            }.bind(this),
            error: function(xhr, status, err){
                console.log(err);
            }
        })

    }
    getProjects(){
        this.setState({projects:[
                {
                    id:uuid.v4(),
                    title:'Business Website',
                    category: 'Web Design'
                },
                {
                    id:uuid.v4(),
                    title:'Social App',
                    category: 'Mobile Development'
                },
                {
                    id:uuid.v4(),
                    title:'Ecommerce Shopping Cart',
                    category: 'Web Developement'
                }
            ]});
    }
    componentWillMount(){
        this.getProjects();
        this.getUsers();

    }

    cnomponentDidMount(){
        this.getUsers();
    }

    handleAddProject(project){
        let projects = this.state.projects;
        projects.push(project);
        this.setState({projects: projects});
        //console.log(project);
    }
    handleDeleteProject(id){
        let projects = this.state.projects;
         let index = projects.findIndex(x => x.id === id);
         projects.splice(index, 1);
        this.setState({projects: projects});


    }
  render() {
    return (
      <div className="App">
          <AddProject addProject={this.handleAddProject.bind(this)}/>
          <Project projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
          <hr/>
          <Users users={this.state.users}/>
      </div>
    );
  }
}

export default App;
