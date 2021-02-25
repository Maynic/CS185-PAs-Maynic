import React from 'react';
import './index.css';

class Videos extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Tab_Id: "Videos",
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
            largeSrc:source.target.getElementsByTagName("source")[0].src
        });
        source.preventDefault();
        // console.log('The link was clicked.');
        // var video = document.getElementById('enlargedpic');
        // var source = video.getElementsByTagName("source")[0];
        // source.src = _this.getElementsByTagName("source")[0].src;
        // video.pause()
        // video.load();

        console.log(`large: ${source.target.src}`)   
        console.log(`src: ${this.state.largeSrc}`)   
    }
    // thing() {
    //     var x = document.getElementsByClassName("videos");
    //     var i;
    //     for (i = 0; i < x.length; i++) {
    //         x[i].addEventListener("click", function(event){event.preventDefault(); });
    //     }
    // }
    // handleClick(e) {

    // }
    render() {
        // this.thing();
  
        const vids = 
        <div style={{paddingLeft: 20}}>
            <h2>  All videos are recorded by myself.</h2>

            <video onClick={this.showDiv} className="videos" width="320" height="240" controls loop>
                <source src="videos/IMG_2133.mp4" type="video/mp4"/>
            </video>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <video onClick={this.showDiv} className="videos" width="320" height="240" controls loop>
                <source src="videos/IMG_2053.mp4" type="video/mp4"/>
            </video>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <video onClick={this.showDiv} className="videos" width="320" height="240" controls loop>
                <source src="videos/IMG_2133.mp4" type="video/mp4"/>
            </video>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <video onClick={this.showDiv} className="videos" width="320" height="240" controls loop>
                <source src="videos/IMG_2053.mp4" type="video/mp4"/>
            </video>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <video onClick={this.showDiv} className="videos" width="320" height="240" controls loop>
                <source src="videos/IMG_2133.mp4" type="video/mp4"/>
            </video>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <video onClick={this.showDiv} className="videos" width="320" height="240" controls loop>
                <source src="videos/IMG_2053.mp4" type="video/mp4"/>
            </video>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <video onClick={this.showDiv} className="videos" width="320" height="240" controls loop>
                <source src="videos/IMG_2133.mp4" type="video/mp4"/>
            </video>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <video onClick={this.showDiv} className="videos" width="320" height="240" controls loop>
                <source src="videos/IMG_2053.mp4" type="video/mp4"/>
            </video>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <video onClick={this.showDiv} className="videos" width="320" height="240" controls loop>
                <source src="videos/IMG_2133.mp4" type="video/mp4"/>
            </video>
        </div>
    
        const largeVid = 
        <div >
            <div id="popWindow" onClick={this.closeDiv} className={"popWindow"} />
            <div id="maskLayer"  className={"maskLayer"} >  
                <video id="enlargedpic" width="640" height="480" controls loop>
                    <source src={this.state.largeSrc} type="video/mp4"/>
                </video>            
            </div>  
            {vids}
        </div>


        if (this.state.renderDiv === false) {
            return vids;
        }
        else {return largeVid;}

    }
}

// class Videos extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         Tab_Id: "Videos"
//       };
//     }
  
//     render() {
//       return(
//         <div  style={{paddingLeft: 20}} >

//         </div>
//       );
//     }
// }

export default Videos;

