import { createReducer, createSlice } from "@reduxjs/toolkit"
// import { updateStatus } from './action'


const initialState = {
    name: "Ramesh",
    age: 20,
    status: "coder"
}



//// # this is old method
// export default (state = initialState, action) => {
//     if (action.type === 'UPDATE_AGE') {
//         return {
//             ...state,
//             age: action.payload
//         }
//     }
//     return state
// }


// export default createReducer(initialState, (builder) => {
//     builder.addCase('UPDATE_AGE', (state, action) => {
//         state.age = action.payload
//     })
//     builder.addCase('UPDATE_NAME', (state, action) => {
//         state.name = action.payload
//     })
//     builder.addCase(updateStatus, (state, action) => {
//         state.status = action.payload
//     })
// })


const userReducer = createSlice({
    name: 'person', // put  any name it will use internaly no use of this name 
    initialState,
    reducers: {
        updateName(state, action) {
            state.name = action.payload
        },
        updateAge(state, action) {
            state.age = action.payload
        },
        updateStatus(state, action) {
            state.status = action.payload
        }
    }

})

export const { updateName, updateStatus, updateAge } = userReducer.actions

export default userReducer.reducer