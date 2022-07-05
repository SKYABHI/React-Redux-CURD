import React from 'react';
//import SignIn from './SignIn.js';
import {NavLink} from 'react-router-dom'; 
import classes from './Navigation.css'
import { useDispatch } from 'react-redux';
import { authActions } from '../store/index';
import { useSelector } from 'react-redux';
const Navigation = () => {
	const isAuth = useSelector(state=>state.auth.isAuthenticated);
        const Dispatch =  useDispatch();
        
        const logoutHandler = () => {
            Dispatch(authActions.logout());

			console.log(isAuth);

        };
		return(
        <div className={classes.header}>
		
					<nav style={{display: 'flex', justifyContent:'flex-end'}}>
					<NavLink onClick={logoutHandler} to='/signin' activeClassName={classes.active} className='f3 link dim black underline pa3 pointer'>Sign Out</NavLink>
					<NavLink to='/add'  activeClassName={classes.active} className='f3 link dim black underline pa3 pointer'>Add</NavLink>
					<NavLink to='/view'  activeClassName={classes.active} className='f3 link dim black underline pa3 pointer'>View</NavLink>	
				</nav>
			
		
			
		
        </div>
		);
	}
	
		


export default Navigation;