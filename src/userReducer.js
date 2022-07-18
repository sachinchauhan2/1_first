import { createReducer } from "@reduxjs/toolkit"
// import { updateStatus } from '../action'


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


export default createReducer(initialState, (builder) => {
    builder.addCase('UPDATE_AGE', (state, action) => {
        state.age = action.payload
    })
    builder.addCase('UPDATE_NAME', (state, action) => {
        state.name = action.payload
    })
    builder.addCase('UPDATE_STATUS', (state, action) => {
        state.status = action.payload
    })
})