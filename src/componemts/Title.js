import React from 'react';
import ReactDOM from 'react-dom';
export default class Title extends React.Component{



render(){
return(
<div>
<h1>Hello From ReactTitle</h1>
</div>
);
}

}


ReactDOM.render(
  <Title/>,
document.getElementById("start"));
