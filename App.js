// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// // export default App;

import React from 'react';
import ReactDOM from 'react-dom';
var brandname=prompt("enter the brand name",null);
var colour=prompt("enter the colour",null);
var amount=prompt("enter the price",0);
export default class Laptop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Brand:brandname,
            color:colour,
            price:amount
        };
    }
    changeBrand = () =>{
        this.setState({Brand:"samsung"});
    }
    static getDerivedStateFromProps(props,state){
       return{color: props.set};
    }
    componentDidMount(){
       setTimeout(() => {
          this.setState({price:'10,000'});
       }, 3000);
    }
    getSnapshotBeforeUpdate(prevprops,prevState){
      document.getElementById("sec").innerHTML="this is before update"+prevState.price;
    }
    render() {
        return(
            <>
            <center>
             <div id="first">
            <div id="first-1"><h4> { this.state.Brand } </h4></div>
            <div id="first-2"><h4> { this.state.color } </h4></div>
            <div id="first-3"><h4> { this.state.price } </h4></div></div>
            <div id="second"><p id="sec"></p>
            <button type="button" onClick={this.changeBrand}>click here</button>
            </div>
            </center>
            </>
        );
        
    }
}
ReactDOM.render(<Laptop />,document.getElementById('root'));