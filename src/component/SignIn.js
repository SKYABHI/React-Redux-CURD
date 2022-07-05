
import React, {useState} from 'react';
//import './SignIN.css';
import {Link} from 'react-router-dom'; 
import {useHistory} from 'react-router-dom'; 
import { useDispatch } from 'react-redux';
import { authActions } from '../store/index';
import { toast } from 'react-toastify';


 
const SignIn = () => {
  const history = useHistory();

  const [enteredEmail, setEneteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const dispatch = useDispatch();
  const EmailInputHandler = (event) => {
    setEneteredEmail(event.target.value);
  };

  const PasswordInputHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  

  

  const submitHandler = (event) =>{
    event.preventDefault();

    
        
        setEneteredEmail("");
        setEnteredPassword("");
       

        const userInput ={
          email:enteredEmail ,
          password:enteredPassword
        };
            const emailENT= userInput.email
            const passwordENT =userInput.password
            const abhi= "abhi@gmail.com"
            const abhipass= "1997"
    
    
        if(emailENT===abhi && passwordENT===abhipass){
        
        console.log(emailENT);
        console.log(passwordENT);
        console.log('sussxes');
     
        history.push('/add')
        dispatch(authActions.login());
      }else{
        console.log('ERROR');
        return toast.warning("Please enter correct Id & password!");
      }
    

       
  };

  
  


	return (<div>
			<main className="pa4 black-80">
  <form onSubmit={submitHandler} className="measure center">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6">Email</label>
        <input onChange={EmailInputHandler} value={enteredEmail} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" >Password</label>
        <input onChange={PasswordInputHandler} value={enteredPassword} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
      </div>
      <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
    </fieldset>
    <div className="">
      <input  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="SignIn" />
    </div>
    <div className="lh-copy mt3">
      <nav>
      <Link to="/forgotpassword" className="f6 link dim black db">Forgot your password?</Link>
      </nav>
    </div>
  </form>
</main>

</div>


);
}

export default SignIn;