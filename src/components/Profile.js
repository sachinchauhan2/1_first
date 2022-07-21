import React from 'react'
// import {updateStatus,fetchName} from '../action'
import {useSelector,useDispatch} from 'react-redux'
import { updateName,updateAge,updateStatus,fetchUserName} from '../userReducer'



function Profile() {
    const {name,age,status}=useSelector((state)=>{
        console.log(state)
        return state
    })

    const dispatch = useDispatch()

    // const updateAge = (age)=>{
    //     dispatch({type:'UPDATE_AGE',payload:age})
    // }
    const changeAge = (age)=>{
        dispatch(updateAge(age))
    }

    // const updateName = ()=>{
    //     // const res = await fetch('https://jsonplaceholder.typicode.com/users')
    //     // const result = await res.json()
    //     // dispatch({type:'UPDATE_NAME',payload:result[0].name})
    //     dispatch(fetchName())
    // }

    const changeName = ()=>{

        dispatch(fetchUserName())
    }
    // const updateStatusvalue = (status)=>{
    //     dispatch(updateStatus(status))
    // }
    const changeStatus = (status)=>{
        dispatch(updateStatus(status))
    }

  return (
    <div>
        <h1> I am profile component</h1>
        <h2>{name}</h2>
        <h2>{age}</h2>
        <h2>{status}</h2>
        <button onClick={()=>changeAge(30)}>Update Age</button>
        <button onClick={()=>changeName()}>Update Name</button>
        <button onClick={()=>changeStatus('signal')}>Update status</button>


    </div>
  )
}

export default Profile