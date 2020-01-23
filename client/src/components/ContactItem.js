import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Removecontact } from '../actions/Contactactions'
import { connect } from 'react-redux'

class ContactItem extends Component {


    render() {
        let editMode = true;
        return (

            <div className='contact'>
                <h4>Contact name : {this.props.contact.name}</h4>
                <h5>Contact telephone :{this.props.contact.telephone}</h5>
                <h5>Contact email :{this.props.contact.email}</h5>
                <button >
                    <Link to={`/modifycontact/${editMode}/${this.props.contact._id}`}>Edit</Link>
                </button>
                <button onClick={() => this.props.Removecontact(this.props.contact._id)}>Remove</button>
            </div>
        )
    }
}



export default connect(null, { Removecontact })(ContactItem);
