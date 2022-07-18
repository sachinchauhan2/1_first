# React Redux-Toolkit Notes

`store` :  ""

`Reducer`: 

~~=Old method~~
- ```javascript
    // old method
    export default (state = initialState, action) => {
         if (action.type === 'UPDATE_AGE') {
             return {
                 ...state, // ## make copy of state 
                 age: action.payload
             }
         }
         return state
    }
    ```
**New Method**
-  ``` javascript
    import { createReducer } from "@reduxjs/toolkit"


    export default createReducer(initialState, (builder) => {
        builder.addCase('UPDATE_AGE', (state, action) => {
            state.age = action.payload
        })
    })


    ```
