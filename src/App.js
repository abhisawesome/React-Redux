import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector,connect} from 'react-redux';
import {store, increment,decrement} from './index';
const add =()=>{
  store.dispatch({type: 'INCREMENT'});
}
const sub = ()=>{
  store.dispatch(decrement());
}
const In = ()=>{
  store.dispatch({type:'IN'});
}
const Out = ()=>{
  store.dispatch({type:'OUT'});
}
class App extends React.Component
{

  render()
  {
    return((<div>
      counter: {this.props.counter}{console.log(this.props)}
      <br/>
      <button onClick={()=>{add();In()}}>+</button>
      <button onClick={()=>{sub();Out()}}>-</button>
    </div>))
  }
}
const mapStateToProps = (state, ownProps) => ({
  counter:state.counterReducer,
  pop:ownProps
})
export default connect(mapStateToProps) (App);