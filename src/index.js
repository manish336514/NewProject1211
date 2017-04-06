
import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./componemts/Header.js";
import Footer from "./componemts/Footer.js";
import Title from "./componemts/Title.js";
export default class Basic extends React.Component{
constructor(){
    super();
    this.a={name:"manishkk"};
    this.b={name:"manishkk1"};
}

render(){


return(
<div>


  First name:<br/>
  <input type="text" name="firstname" />

{this.b.name}
<Title     new121={this.a.name} />
<Header/>
<Footer/>
</div>
);
}

}


ReactDOM.render(
  <Basic/>,
document.getElementById("start"));
