# React Redux-Toolkit Notes

##  `store` :    
```javascript
import { configureStore } from '@reduxjs/toolkit'
const store = configureStore({
  // reducer:(state)=>{
  //   return state
  // },
  // preloadedState: initialState
  reducer:userReducer,
})
```
---
```javascript
import {useSelector,useDispatch} from 'react-redux'
```
### `useSelector`: 
- ```javascript
    const {name,age,status}=useSelector((state)=>{
        console.log(state)
        return state
    })
     ```

### `useDispatch`

- ```javascript
    const dispatch = useDispatch()
    const updateAge = (age)=>{
        dispatch({type:'UPDATE_AGE',payload:age})
        // type always is string
    }
  ```

##  `Reducer`: 

  ~~Old method~~
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
**New Method** --> using redux toolkit
-  ```javascript
    import { createReducer } from "@reduxjs/toolkit"
    import { updateStatus } from '../action'
    export default createReducer(initialState, (builder) => {
        builder.addCase('UPDATE_AGE', (state, action) => {
            state.age = action.payload
        })
        builder.addCase('UPDATE_NAME', (state, action) => {
            state.name = action.payload
        })
        builder.addCase(updateStatus, (state, action) => {
            state.status = action.payload
        })
        `
            Note : we can use like this but output will same
            builder.addCase(updateStatus.type, (state, action) => {
                state.status = action.payload
            })
            builder.addCase(updateStatus.toString(), (state, action) => {
                state.status = action.payload
            })
        `
    })
    ```

# Action

```javascript
// old method with  by defult 
export default (state) => {
    return {
        type: 'UPDATE_STATUS',
        payload: state
    }
}
```
`Using redux toolkit very easy`

```javascript
import { createAction } from '@reduxjs/toolkit'
export const updateStatus = createAction('UPDATE_STATUS')
```
