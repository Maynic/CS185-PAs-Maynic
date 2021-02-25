import React from 'react';
import './index.css';

class Text extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Tab_Id: "Text"
      };
    }
    render() {
      return(
        <div  style={{paddingLeft: 20}} >
            <br/>
            <label for="fname">First name:</label>  <br/>
            <input type="text" id="fname" name="fname" placeholder="Maynic"/><br/>
            <label for="lname">Last name:</label>  <br/>
            <input type="text" id="lname" name="lname" placeholder="Ye"/><br/>

            <p>Favorite Movie</p>
            {/* <input type="radio" id="Avengers" name="movie" value="Avengers" checked="checked"/> */}
            <input type="radio" id="Avengers" name="movie" value="Avengers"/>
            <label for="Avengers">Avengers</label><br/>
            <input type="radio" id="DarkKight" name="movie" value="DarkKight"/>
            <label for="female">Dark Kight</label><br/>
            <input type="radio" id="Tenet" name="movie" value="Tenet"/>
            <label for="other">Tenet</label>
            <br/>
            <br/>
            <input type="submit" value="Done"/>
        </div>
      );
    }
}

export default Text;
