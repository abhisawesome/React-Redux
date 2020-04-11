import React from 'react';
import {connect} from 'react-redux';


const MainFrame = (props)=>{
    
return(<div>
    Value:{props.counter}<br />
    <button onClick={() => { props.increment() }}>+</button>
    <button onClick={() => { props.decrement() }}>-</button>
</div>)
}

const mapDispatchToProps = (dispatch)=>{
    const increment = () => {  return dispatch({ type: 'INCREMENT' })}
    const decrement = () => { return dispatch({ type: 'DECREMENT' })}
    return {increment,decrement}
}
const mapStateToProps = (state)=>{
    return { counter: state.counterReducer}
}
export default connect(mapStateToProps,mapDispatchToProps)(MainFrame)