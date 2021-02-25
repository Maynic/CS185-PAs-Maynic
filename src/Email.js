import React from 'react';
import './index.css';

class Email extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Tab_Id: "Email"
      };
    }
    checkEmail = () => {
        var em = document.getElementById('inputemail').value;
        var l4c = em.slice(em.length - 4);
        if ( em.includes("@") && (l4c === ".edu" || l4c === ".com")){
            document.getElementById('result').innerHTML = "Email successfully recorded";
        }else{
            document.getElementById('result').innerHTML = "Invalid email address";
        }
    }
  
    render() {
      return(
        <div  style={{paddingLeft: 20}} >
            <br/>
            <label for="inputemail">Email: </label>  <br/>
            <input type="text" id="inputemail" name="inputemail" placeholder="Please enter your email"/><br/>
            <p id="result"></p>
            <br/>
            <button onClick={this.checkEmail} >Validate</button>
        </div>
      );
    }
}

export default Email;