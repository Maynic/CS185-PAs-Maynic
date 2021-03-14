import React from 'react';
import './index.css';


class Images extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Tab_Id: "Images",
        renderDiv:false,
        largeSrc:'/images/tianshougeclose.jpg'
      };
    }
    closeDiv = () => {
        this.setState({ renderDiv:false });   
    }
    showDiv = (source) => {
        this.setState({ 
            renderDiv:true,
            largeSrc:source.target.src
        });

        // console.log(`large: ${source.target.src}`)   
        // console.log(`src: ${this.state.largeSrc}`)   
    }

    render() {
  
        const pics = 
        <div style={{paddingLeft: 20}}>
            <h2>  All photos are taken by myself.</h2>

            <img onClick={this.showDiv} src={process.env.PUBLIC_URL + '/images/tianshougeclose.jpg'} alt="tianshougeclose" width="256" height="256" />
            <span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>

            <img onClick={this.showDiv} src={process.env.PUBLIC_URL + "/images/latern3.jpg"} alt="HTML5 Icon" width="256" height="256"/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <img onClick={this.showDiv} src={process.env.PUBLIC_URL + "/images/latern2.jpg"} alt="HTML5 Icon" width="256" height="256"/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <img onClick={this.showDiv} src={process.env.PUBLIC_URL + "/images/chrismasstreet.jpg"} alt="HTML5 Icon" width="256" height="256"/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <img onClick={this.showDiv} src={process.env.PUBLIC_URL + "/images/ucsbuniversitycenter.jpg"} alt="HTML5 Icon" width="256" height="256"/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <img onClick={this.showDiv} src={process.env.PUBLIC_URL + "/images/maple3.jpg"} alt="HTML5 Icon" width="256" height="256"/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <img onClick={this.showDiv} src={process.env.PUBLIC_URL + "/images/blursign.jpg"} alt="HTML5 Icon" width="256" height="256"/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <img onClick={this.showDiv} src={process.env.PUBLIC_URL + "/images/colorfulstreet.jpg"} alt="HTML5 Icon" width="256" height="256"/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <img onClick={this.showDiv} src={process.env.PUBLIC_URL + "/images/hotelday.jpg"} alt="HTML5 Icon" width="256" height="256"/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <img onClick={this.showDiv} src={process.env.PUBLIC_URL + "/images/hotelnight.jpg"} alt="HTML5 Icon" width="256" height="256"/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <img onClick={this.showDiv} src={process.env.PUBLIC_URL + "/images/latern.jpg"} alt="HTML5 Icon" width="256" height="256"/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <img onClick={this.showDiv} src={process.env.PUBLIC_URL + "/images/crowd.jpg"} alt="HTML5 Icon" width="256" height="256"/>
        </div>
    
        const largePic = 
        <div >
            <div id="popWindow" onClick={this.closeDiv} className={"popWindow"} />
            <div id="maskLayer"  className={"maskLayer"} >  
            {/* <img id="enlargedpic" className={"pimg"} src={process.env.PUBLIC_URL + '/images/tianshougeclose.jpg'} alt="tianshougeclose" /> */}
                <img id="enlargedpic" className={"pimg"} src={this.state.largeSrc} alt="large" />
            </div>  
            {pics}
        </div>


        if (this.state.renderDiv === false) {
            return pics;
        }
        else {return largePic;}

    }
}

export default Images;