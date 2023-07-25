import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state'
const Shop = () => {
    const dispatch = useDispatch();
    const action = bindActionCreators(actionCreators,dispatch);
  return (
    <div className='container'>
      <h2>Monitor your funds by adding values</h2>
      <button className='btn btn-primary mx-2'onClick={()=>{ action.withdrawMoney(100)}}>-</button>
      Add values
      <button className='btn btn-primary mx-2' onClick={()=>{action.depositMoney(100)}}>+</button>
    </div>
  )
}

export default Shop
