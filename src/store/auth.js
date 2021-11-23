import { createSlice } from "@reduxjs/toolkit"

const initialAuthState = { isAuth:false}

//every slice needs a name,intitial state and Reducers, that is again, an object, a map you could say,of all the reducers this slice needs,this state slice needs.



const authSlice = createSlice(
    {
        name:'auth',
        initialState: initialAuthState,
        reducers:{
            login(state){
                state.isAuth=true
            },
            logout(state){
                state.isAuth=false
            }
        }
    }
)

export const authActions = authSlice.actions;


export default authSlice.reducer;
