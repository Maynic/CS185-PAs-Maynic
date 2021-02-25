import React from 'react';
import './index.css';

class Table extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Tab_Id: "Table"
      };
    }
  
    render() {
      return(
        <div  style={{paddingLeft: 20}} >

            <h2>Projects</h2>

            <table>
            <tr>
                <th>Name</th>
                <th>Details</th>
                <th>Year</th>
            </tr>
            <tr>
                <td><a href="https://github.com/zye03/Project-Soda">Project Sode</a></td>
                <td>Project Sode is my course project of ECE194M (video game development). It is trying to let players experience the life of people with disabilities.</td>
                <td>2020</td>
            </tr>
            <tr>
                <td><a href="https://mapache-search.herokuapp.com/">Mapache Search</a></td>
                <td>Mapache Search is my course project of CS56 (renamed to CS156 now). It is a programing related topics specificated search tool. </td>
                <td>2019</td>
            </tr>
            </table>
        </div>
      );
    }
}

export default Table;