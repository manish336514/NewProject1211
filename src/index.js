
import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./componemts/Header.js";
import Footer from "./componemts/Footer.js";
import Title from "./componemts/Title.js";

import {Router,Route,browserHistory} from "react-router";
import{Home} from "./componemts/Home";
import{User} from "./componemts/User";



export default class Basic extends React.Component{
constructor(){
    super();
    this.state = {name:''}
     this.state={age:''}
    this.changeInput = this.changeInput.bind(this)

    this.changeAge=this.changeAge.bind(this)
}
changeInput(e){
    this.setState({name:e.target.value})
}
changeAge(e)
{
  this.setState({age:e.target.value})
}
render(){


return(



<div>


  <Router history={browserHistory}>
    <Route path={"user"} Component="User"/>

      <Route path={"home"} Component="Home"/>
  </Router>


  First name:<br/>
  <input type="text" name="firstname" value = {this.state.name} onChange = {this.changeInput}/>
<input type="text" name="age" value={this.state.age}  onChange={this.changeAge}/>
<Title     new121={this.state.age} />
<Header  new131={this.state.name} />
<Footer/>
</div>
);
}

}


ReactDOM.render(
  <Basic/>,
document.getElementById("start"));
