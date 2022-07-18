import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

function Profile() {
    const {name,age,status}=useSelector((state)=>{
        console.log(state)
        return state
    })
    
    const dispatch = useDispatch()

    const updateAge = (age)=>{
        dispatch({type:'UPDATE_AGE',payload:age})
    }

  return (
    <div>
        <h1> I am profile component</h1>
        <h2>{name}</h2>
        <h2>{age}</h2>
        <h2>{status}</h2>
        <button onClick={()=>updateAge(30)}>Update Age</button>
    </div>
  )
}

export default Profile