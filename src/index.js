
import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./componemts/Header.js";
import Footer from "./componemts/Footer.js";
import Title from "./componemts/Title.js";
export default class Basic extends React.Component{
constructor(){
    super();
    this.state = {name:''}
    this.changeInput = this.changeInput.bind(this)
}
changeInput(e){
    this.setState({name:e.target.value})
}
render(){


return(
<div>


  First name:<br/>
  <input type="text" name="firstname" value = {this.state.name} onChange = {this.changeInput}/>

<Title     new121={this.state.name} />
<Header/>
<Footer/>
</div>
);
}

}


ReactDOM.render(
  <Basic/>,
document.getElementById("start"));
