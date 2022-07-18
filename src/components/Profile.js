import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
// import updateStatus from '../action'
import {updateStatus} from '../action'


function Profile() {
    const {name,age,status}=useSelector((state)=>{
        console.log(state)
        return state
    })

    const dispatch = useDispatch()

    const updateAge = (age)=>{
        dispatch({type:'UPDATE_AGE',payload:age})
    }

    const updateName = (name)=>{
        dispatch({type:'UPDATE_NAME',payload:name})
    }
    const updateStatusvalue = (status)=>{
        dispatch(updateStatus(status))
    }

  return (
    <div>
        <h1> I am profile component</h1>
        <h2>{name}</h2>
        <h2>{age}</h2>
        <h2>{status}</h2>
        <button onClick={()=>updateAge(30)}>Update Age</button>
        <button onClick={()=>updateName('Sachin')}>Update Name</button>
        <button onClick={()=>updateStatusvalue('signal')}>Update status</button>


    </div>
  )
}

export default Profile