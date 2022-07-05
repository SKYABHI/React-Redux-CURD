import React, { useState } from 'react';
import './View.css';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { addActions } from '../store/Adddetail';
//import { useHistory } from 'react-router-dom';

const View = () => {
    const[searchfield, setSearchfield] = useState("");
    const Adddetals = useSelector(state => state.add);
    const dispatch = useDispatch();
    //const dispatch1 = useDispatch();
   // const history = useHistory();

    const deleteDeteail = (id) => {
        dispatch(addActions.delete_details(id));
        toast.success("Details Deleted successfully!");
       // history.push("/view");
    }
    // const filterarray = Adddetals.filter(i => {
    //     return i.name.toLowerCase().includes(action.payload.toLowerCase());
    
    
    
    
    
    
    const filterarray = Adddetals.filter ((i) => {
        if(searchfield === ""){
             return i
        }else if(i.user_name.toLowerCase().includes(searchfield.toLowerCase()) ||
        i.name.toLowerCase().includes(searchfield.toLowerCase())||
        i.email.toLowerCase().includes(searchfield.toLowerCase())||
        i.xenderOf.toLowerCase().includes(searchfield.toLowerCase())||
        i.statusOfPerson.toLowerCase().includes(searchfield.toLowerCase())){
           return i
        }
    })
    const searchDetail = () => {
       // dispatch(addActions.search_details(searchfield));
       
    }
    console.log(searchfield);
	return (
		<div className="  ">
			
            <div className="mt3 pt7 measure center">
                <input onChange={e => setSearchfield(e.target.value)}  
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white mr3 w-75" type="placeholder" name="SearchBox"  id="SearchBox" />
                <input onClick={() => searchDetail()} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 " type="submit" value="Search" />
            </div>
                <table className= " measure center pv5 pr5">
                <thead>
                    <tr>
                    <th className= " pr3">ID</th>
                    <th className= " pr5">User_Name</th>
                    <th className= " pr7">Name</th>
                    <th className= " pr7">Email</th>
                    <th className= " pr5">Gender</th>
                    <th className= " pr5">Status</th>
                    <th className= " pr7">Action</th>
                    </tr>
                    
                </thead>
                <tbody>
                    { filterarray.map((i,id) => (
                        <tr key={id}>
                            <td> {id+1}</td>
                            <td>{i.user_name}</td>
                            <td>{i.name}</td>
                            <td>{i.email}</td>
                            <td>{i.xenderOf}</td>
                            <td>{i.statusOfPerson}</td>
                            <td className="pv2">
                                <Link to= {`/edit/${i.id}` } 
                                className="white b ml3 pa ph3 bg-green hover-bg-mid-gray bn br2 hover-shadow-inner">Edit
                                </Link>
                                <button onClick={() => deleteDeteail(i.id)} type="button" class="white b ml3 pa ph3 bg-gray hover-bg-mid-gray bn br2 hover-shadow-inner">
                                    Delete
                                </button>
                            </td>
                        </tr>
                        ))
                    }
                    
                    
                </tbody>
                
                </table>
			
		</div>
		);
}

export default View;