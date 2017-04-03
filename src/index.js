
import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./componemts/Header.js";
import Footer from "./componemts/Footer.js";
import Title from "./componemts/Title.js";
export default class Basic extends React.Component{



render(){
return(
<div>

<Title/>
<Header/>
<Footer/>
</div>
);
}

}


ReactDOM.render(
  <Basic/>,
document.getElementById("start"));
