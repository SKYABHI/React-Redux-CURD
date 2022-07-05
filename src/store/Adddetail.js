import { createSlice } from "@reduxjs/toolkit";
//import { getDefaultNormalizer } from "@testing-library/react";

    const initialAdd = [{
        id:0,
        user_name:"Abhi",
        name:"abhishek",
        email:"abhi@gmail.com",
        xenderOf:"male",
        statusOfPerson:"single"


    },{
        id:1,
        user_name:"mb",
        name:"Manisha bhadra",
        email:"abhi234@gmail.com",
        xenderOf:"female",
        statusOfPerson:"merried"
    }]

const addSlice = createSlice({
    name:'adddetails',
    initialState:
        initialAdd,

    reducers:{
            add_details(state,action){

                state = state.push(action.payload)
               /* let member=action.payload
                console.log(member)
                let addnew=[state.initialAdd]
                initialAdd.concat(member);*/
            },
            edit_details(state,action){

                state = state.splice(action.payload.id,1,action.payload)
                //state = state.map((i) => i.id === action.payload.id ? action.payload :state[i])
                
            },
            delete_details(state,action){
                state = state.splice(action.payload.id,1)
            }
          /*  search_details(state,action){
                state = state.filter(i => {
                    return i.name.toLowerCase().includes(action.payload.toLowerCase());
                    
                    
                    
                    i.id.match(/(action.payload)/gi) ||
                    i.user_name.match(/action.payload/gi) ||
                    i.name.match(/action.payload/gi) ||
                    i.email.match(/action.payload/gi) ||
                    i.xenderOf.match(/action.payload/gi) ||
                    i.statusOfPerson.match(/action.payload/gi)
                    
                })
            }*/
           

        }
    }
);



export const addActions = addSlice.actions;
export default addSlice.reducer;
