import React from 'react';
import './index.css';

// title: Zoom Meeting Manager
// button: Create Meeting <-> Full Schedule
// 4 input fields: 
// Title (text): non-empty, within 30 characters
// Date(datetime): greater than current date
// Zoom link(url): contains "zoom"
// Important (checked): default unchecked, if checked, highlighten the result in list
// print out an error message or show an alert box for the error.
// submit button: Save Meeting
// delete icon:
// double click to update:
// no available meeting message
class ZoomList extends React.Component {
}
class ZoomInput extends React.Component {
}
class Zoom extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Tab_Id: "Zoom",
        isList:false,
        largeSrc:'/images/tianshougeclose.jpg'
      };
    }
    closeDiv = () => {
        this.setState({ isList:false });   
    }
    showDiv = (source) => {
        this.setState({ 
            isList:true,
            largeSrc:source.target.src
        });

        // console.log(`large: ${source.target.src}`)   
        // console.log(`src: ${this.state.largeSrc}`)   
    }

    render() {
  
        const container = 
        <div style={{paddingLeft: 20}}>
            <h2>Zoom Meeting Manager</h2>
            {/* <button onClick={this.executeScroll} className={'myBtn'}> Top </button> */}
            <button onClick={this.executeScroll} > Create Meeting </button>
            <br/><br/>
            <img onClick={this.showDiv} src={process.env.PUBLIC_URL + '/images/tianshougeclose.jpg'} alt="tianshougeclose" width="256" height="256" />
            <span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
        </div>
    
        const largePic = 
        <div >
            <div id="popWindow" onClick={this.closeDiv} className={"popWindow"} />
            <div id="maskLayer"  className={"maskLayer"} >  
            {/* <img id="enlargedpic" className={"pimg"} src={process.env.PUBLIC_URL + '/images/tianshougeclose.jpg'} alt="tianshougeclose" /> */}
                <img id="enlargedpic" className={"pimg"} src={this.state.largeSrc} alt="large" />
            </div>  
            {container}
        </div>


        if (this.state.isList === false) {
            return container;
        }
        else {return largePic;}

    }
}

export default Zoom;