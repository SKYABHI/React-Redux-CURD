
import React from 'react';
import SignIn from './component/SignIn.js';
import Navigation from './component/Navigation.js';
import Add from './component/Add.js';
import View from './component/View.js';
import { Route } from 'react-router-dom';
import './App.css';
import 'tachyons';
import { Switch, Redirect } from 'react-router-dom';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer} from 'react-toastify';
import Edit from './component/Edit.js';


function App() {

  const isAuth = useSelector(state=>state.auth.isAuthenticated);
    

  return (


    <div>
        <ToastContainer />
      <Fragment>
      {isAuth && <Navigation /> }
        <Switch>
          <Route path="/" exact>
            <Redirect to='/signin' />
          </Route>
          <Route path="/signin">
            {!isAuth && <SignIn /> }
          </Route>
          
          <Route path="/add">
            {isAuth && <Add /> }
          </Route>
          <Route path="/view">
            {isAuth && <View /> }
          </Route>
          <Route path="/edit/:id">
            {<Edit />}
          </Route>

        </Switch>
      </Fragment>

    </div>
  );
}

export default App;
