import React, { Component } from 'react';


class UsersList extends Component {

    render() {

        return (
            <li className="User">
                <strong style={{color:"Blue"}}>{this.props.users.name}</strong>
                <li>Email: {this.props.users.email}</li>
                <li>City: {this.props.users.address.city}</li>


            </li>
        );
    }
}
// UsersList.propTypes = {
//     users: React.PropTypes.object,
//
// }
export default UsersList;