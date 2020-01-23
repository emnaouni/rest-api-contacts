import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter,  Route, Switch} from 'react-router-dom'
import Addcontact from './components/Addcontact';
import ContactPage from './components/ContactPage'

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
    <h1>Contact App</h1>
    <Switch>
        <Route exact path='/' component={ContactPage}/>
        <Route path='/Addcontact/:editmode' component={Addcontact}/>
        <Route path='/modifycontact/:editmode/:id' component={Addcontact}/>
    </Switch>
    </BrowserRouter>
  
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
