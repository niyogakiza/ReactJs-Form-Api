import React, { Component } from 'react';
import UsersList from "./UsersList";


class Users extends Component {

    render() {
        let usersList;
        if(this.props.users){
            usersList = this.props.users.map(users =>{
                // console.log(project);
                return(
                    <UsersList  key={users.name} users={users}/>
                )
            })
        }
        console.log(this.props);
        return (
            <div className="Users">

                <h3>Users List</h3>
                <hr/>

                {usersList}

            </div>
        );
    }
}


// Users.propTypes = {
//     users: React.PropTypes.array
//
export default Users;
