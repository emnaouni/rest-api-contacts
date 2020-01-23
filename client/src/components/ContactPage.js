import React, {Component} from 'react';
import'./contact.css'
import ContactItem from './ContactItem'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {getContact} from '../actions/Contactactions';

class ContactPage extends Component {
    state={
       
        editMode:false
    }
   
    componentDidMount() {
      this.props.getContact()
    }
    render(){
        let edit =false
        return (
    <div className='Contact-Header'>
    <button onClick={()=>this.setState({editMode:!this.state.editMode})}> Contact List</button>
   
    <button ><Link to={`/Addcontact/${edit}`}>Add contact</Link> </button>
     <h1>This is the contact page</h1>
    {console.log('rfitmode'+this.state.editMode)}
    {
        this.state.editMode && <div className='contactList'>
         
          {this.props.allcontact.contacts.map(el => 
            <ContactItem key={el._id} contact={el} />
        )}
        </div>
    }
    
        
    </div>
)
}}

const mapStateToProps =state=>{
    return {
        allcontact : state.contactReducers
    };
    
}
export default connect(mapStateToProps ,{getContact})(ContactPage);