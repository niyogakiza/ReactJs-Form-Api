import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
    constructor(props){
        super(props);
        this.state = {
            newProject:{}
        }
    }

       static defaultsProps = {
           categories: ['web design', 'web development', 'Mobile Development']

       };

       handleSubmit(e){
           //console.log(this.refs.title.value);
           if(this.refs.title.value === ''){
               alert('Title is required');
           } else {
               this.setState({newProject:{
                       id:uuid.v4(),
                       title: this.refs.title.value,
                       category: this.refs.category.value
                   }}, function () {
                   //console.log(this.state);
                   this.props.addProject(this.state.newProject);
               });

           }
           e.preventDefault();

       }



    render() {
        let categoryOptions;
        if(this.props.categories){
            categoryOptions = this.props.categories.map(category => {
                return <option key={category} value="category">{category}</option>
            });
        }

        return (
            <div >
               <h3>Add Project</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Title</label><br/>
                        <input type="text" ref="title"/>
                    </div>
                    <div>
                        <label>Category</label><br/>
                    <select ref="category">
                        {categoryOptions}
                    </select>
                    </div>
                    <br/>
                    <input type="submit" value="submit"/>
                    <br/>
                </form>
            </div>
        );
    }
}
// AddProject.propTypes = {
//    category: React.PropTypes.array,
//     addProject: React.PropTypes.func
// }

export default AddProject;