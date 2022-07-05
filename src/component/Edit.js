import React,{useState ,useEffect} from 'react';
//import './SignIN.css';
import { Link , useParams} from 'react-router-dom';
import { useDispatch ,useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addActions } from '../store/Adddetail';
import { useHistory } from 'react-router-dom';

const Edit = () => {

    const {id} = useParams();

    const[user_name, setUser_name] = useState("");
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[xenderOf, setXenderOf] = useState("");
    const[statusOfPerson, setStatusOfPerson] = useState("");


    const Adddetals = useSelector(state => state.add);
    const dispatch = useDispatch();
    const history = useHistory();
    const currentDetail = Adddetals.find(i => i.id === parseInt(id));
      //console.log(currentDetail);
    useEffect(() =>{
      
      if(currentDetail){
        setUser_name(currentDetail.user_name);
        setName(currentDetail.name);
        setEmail(currentDetail.email);
        setXenderOf(currentDetail.xenderOf);
        setStatusOfPerson(currentDetail.statusOfPerson);
      }

    },[currentDetail])
      
    const handleSubmit = (e) => {
      e.preventDefault();
      
      const checkEmail = Adddetals.find((Adds) => Adds.id !== parseInt(id) && Adds.email === email  );
      const checkUser = Adddetals.find((Adds) => Adds.id !== parseInt(id) && Adds.user_name === user_name );
        
  
      if(!user_name || !name || !email || !xenderOf || !statusOfPerson){
        return toast.warning("Please fill in all fields!");
      }
  
      if(checkEmail){
        return toast.error("this Email is allready Exists!");
      }
      if(checkUser){
        return toast.error("this User_name is allready Exists!");
      }
  
      const data = {
          id: parseInt(id),
          user_name,
          name,
          email,
          xenderOf,
          statusOfPerson
      }
      console.log(data);
  
      dispatch(addActions.edit_details(data));
      toast.success("Details updated added successfully!");
      history.push("/view");
  
    };

	return (
  
  <div>
    {currentDetail? ( <>
   <div> 
	<main className="pa4 black-80">
  <form onSubmit={handleSubmit} className="measure center">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0">Add Details</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" for="email-address">User_Name</label>
        <input value={user_name} onChange={e => setUser_name(e.target.value)} 
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="User_Name"  id="User_Name" />
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" for="name">Name</label>
        <input value={name} onChange={e => setName(e.target.value)} 
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="Name"  id="Name" />
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
        <input value={email} onChange={e => setEmail(e.target.value)} 
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
      </div>
      <div className="mt3">
       <lable className= "db fw6 lh-copy f6" for="xender">Xender</lable>  
       <div className="mt3">
      <label className="pa2 ma2 lh-copy f6 pointer">
        <input value="male" 
               checked={xenderOf === "male"}
               onChange={e => setXenderOf(e.target.value)}
              type="radio" name="Gender" />Male</label>
      <label className="pa2 ma2 lh-copy f6 pointer">
        <input value="female" 
               checked={xenderOf === "female"}
               onChange={e => setXenderOf(e.target.value)}
               type="radio" name="Gender" />FeMale</label>
      </div>
      </div>
      <div className="mt3">
      <label className="pr3" for="Status">Status:</label>
          
          <select  id="Status" name="Status"
            value={statusOfPerson} onChange={e => setStatusOfPerson(e.target.value)}>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
          </select>
          
        </div>   
     
      
    </fieldset>
    <div className="mt3">
      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Edit Details" />
      <Link to ="/view">
      <input className="b ml3 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Cancel" />
      </Link>
    </div>
  </form>
</main>
</div>
</>
):(
  <h1 className= "measure center tc b pv7">Details does not exists with id: {id}</h1>
)}
</div> 

		);
}

export default Edit;