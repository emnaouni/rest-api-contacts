import React, { Component } from "react"
import './contact.css'
import { connect } from 'react-redux'
import { addcontact, Editcontact } from '../actions/Contactactions'

import { Link } from 'react-router-dom'
class Addcontact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            telephone: '',
            email: ''
        }
    }
    componentDidMount() {
        this.setState(this.props.allcontact.contacts.filter(el => el._id === this.props.match.params.id)[0]);
    }
    handelChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    add = e => {
        e.preventDefault()
        if (this.props.match.params.editmode === "false") {
            this.props.addcontact(this.state)
        }
        else {
            this.props.Editcontact(this.state._id, {name: this.state.name, email: this.state.email, telephone: this.state.telephone});
        }
    }
    render() {
        console.log('editer' + this.props.match.params.editmode)
        console.log("contacts à editer" + this.state)
        return (
            <form className='contactForm'>
                <label>Contact Name</label>
                <input type='text' onChange={this.handelChange} name='name' value={this.state.name}></input>
                <label>Contact Télephone</label>
                <input type='text' onChange={this.handelChange} name='telephone' value={this.state.telephone}></input>
                <label>Contact Email</label>
                <input type='text' onChange={this.handelChange} name='email' value={this.state.email}></input>
                <button onClick={this.add}>
                    <Link to={'/'}>{this.props.match.params.editmode == "true" ? "Edit" : "Add contact"}</Link>
                </button>
            </form >

        );
    }
}
const mapStateToProps = state => {
    return {
        allcontact: state.contactReducers
    };
}
export default connect(mapStateToProps, { Editcontact, addcontact })(Addcontact);