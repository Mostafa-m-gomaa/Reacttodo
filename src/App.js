import { Component } from 'react';
import './App.css';
import Child from './components/child';
import Nav from './components/nav';
import { BrowserRouter,Route } from "react-router-dom";

class App extends Component {
  // state ={
  //   items :[
  //   {name:"mostafa" ,id:1},
  //   {name:"yasser" ,id:2},
  //   {name:"salah" ,id:3}]
  //     }
  // handleInput =(e)=> {
  //   this.setState({
  //     name:e.target.value
  //   })
  //   document.querySelector(".mostafa").innerHTML=e.target.value;

  // }    
  render(){
    return (
      <div className='App'>
       {/* <form>
        <input type="password" onChange={this.handleInput} />
        <input type="submit"/>
        <p>{this.state.name}</p>
        <p className='mostafa'>mostafa</p>
      </form> 
      <Child  items={this.state.items}/> */}
      <BrowserRouter>
      <Nav />
      </BrowserRouter>
      
      </div>
    )
  }
}
export default App;
