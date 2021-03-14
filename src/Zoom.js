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
class ZoomListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          id       : 0,
          title    : "TestItem",
          day      : "2021-03-05T23:00",
          textInfor: "https://ucsb.us/j/8311826784",
          important: false
        };
      }
  
      render() {
        // console.log(this.props.meet.id)   

        if(this.props.meet.important){
            return <div  className={"meet_item"}>
            <div className={"meet_item_button"}>
                <span className={"button_ed"}>
                    <img onClick={this.showDiv}  src={process.env.PUBLIC_URL + '/edit.svg'} alt="ti" width="28" height="28"/>
                </span>
                <span>&nbsp;</span>
                <span className={"button_ed"}>
                    <img onClick={this.showDiv} src={process.env.PUBLIC_URL + '/delete.svg'} alt="ti" width="28" height="28"/>
                </span>
            </div>

            <div className={"meet_item_title"}>
                <img src={process.env.PUBLIC_URL + '/star.svg'} alt="ti" width="28" height="28"/>
                <span>&nbsp;</span>
                <span >{this.props.meet.title}</span>
                <span>&nbsp;</span>
                <img src={process.env.PUBLIC_URL + '/star.svg'} alt="ti" width="28" height="28"/>
            </div>
            <br/>
            <div className={"meet_item_date_link"}>
                <img src={process.env.PUBLIC_URL + '/calendar.svg'} alt="ti" width="28" height="28"/>
                <span>&nbsp;</span>
                <span>{this.props.meet.day}</span>
            </div>
            
            <div className={"meet_item_date_link"}>
                <img src={process.env.PUBLIC_URL + '/link.svg'} alt="ti" width="28" height="28"/>
                <span>&nbsp;</span>
                <a href={this.props.meet.textInfor}>{this.props.meet.textInfor}</a>
            </div>
        </div>
        }
        return <div  className={"meet_item"}>
            <div className={"meet_item_button"}>
                <span className={"button_ed"}>
                    <img onClick={this.showDiv}  src={process.env.PUBLIC_URL + '/edit.svg'} alt="ti" width="28" height="28"/>
                </span>
                <span>&nbsp;</span>
                <span className={"button_ed"}>
                    <img onClick={this.showDiv} src={process.env.PUBLIC_URL + '/delete.svg'} alt="ti" width="28" height="28"/>
                </span>
            </div>

            <div className={"meet_item_title"}>
                {/* <img src={process.env.PUBLIC_URL + '/star.svg'} alt="ti" width="28" height="28"/>
                <span>&nbsp;</span> */}
                <span >{this.props.meet.title}</span>
                <span>&nbsp; &nbsp;</span>
            </div>
            <br/>
            <div className={"meet_item_date_link"}>
                <img src={process.env.PUBLIC_URL + '/calendar.svg'} alt="ti" width="28" height="28"/>
                <span>&nbsp;</span>
                <span>{this.props.meet.day}</span>
            </div>
            
            <div className={"meet_item_date_link"}>
                <img src={process.env.PUBLIC_URL + '/link.svg'} alt="ti" width="28" height="28"/>
                <span>&nbsp;</span>
                <a href={this.props.meet.textInfor}>{this.props.meet.textInfor}</a>
            </div>
        </div>
      }
}
class ZoomList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items : []
        };
      }
  
      render() {
        //   return <ZoomListItem meetings={this.props.meetings}/>
        // const Tabs = ['Text', 'Images', 'Videos', 'Table', 'Email', 'Zoom'];
        // const tabArray = Tabs.map( (tab) => <Tab name={tab} active={this.props.active} changeID={this.props.changeID}/> );
        const mmmm = this.props.meetings
        const meets = mmmm.map((meet) => 
        <div>
        <ZoomListItem key={meet.id} meet={meet}/>
        <br/>
        </div>
        )
        return ( <div> {meets} </div>);
        // return(
        //     <div>

        //         {}
        //     </div>
        // )
      }
}
class ZoomInput extends React.Component {

    render() {
        // Get current time
        // var date = new Date('1995-12-17T03:24:00');
        var date = new Date();
        var ct = date.getFullYear() + "-";
        var tem = (date.getMonth()+1).toString();
        if(tem.length === 1){ct += "0"+tem;}
        else{ct += tem; }
        ct += "-"
        tem = date.getDate().toString();
        if(tem.length === 1){ct += "0"+tem;}
        else{ct += tem; }
        ct += "T";
        tem = date.getHours().toString();
        if(tem.length === 1){ct += "0"+tem;}
        else{ct += tem; }
        ct +=  ":";
        tem = date.getMinutes().toString();
        if(tem.length === 1){ct += "0"+tem;}
        else{ct += tem; }

        var input_title = 
        <div>
        <label for="title">Title: </label><br/>
        <input type="text" id="title" name="title"/>
        </div>
        
        var input_date = 
        <div>
        <label for="meeting-time">Date: </label><br/>
        <input type="datetime-local" id="meeting-time"
        name="meeting-time" value={ct} min={ct} required/>
        </div>

        var input_link = 
        <div>
        <label for="link">Zoom Link: </label><br/>
        <input type="url" id="link" name="link"/>
        </div>
        
        var input_important = 
        <div>
        <label for="important">Important: </label>
        <input type="checkbox" id="important" name="important"/>
        </div>
        
        var button_save = <button onClick={this.executeScroll} id="button_save"  className={"button_save"} > Save Meeting </button>


        var container =
        <div id="zoom_input"  className={"zoom_input"} >  
            <h1 className={"zoom_input_title"}>Meeting Info</h1>
            {input_title}
            {input_date}
            {input_link}
            {input_important}
            <br/>
            {button_save}
        </div>
        return container;
    }

}
class Zoom extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Tab_Id: "Zoom",
        isList:false,
        largeSrc:'/images/tianshougeclose.jpg',
        meetings:[]
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

    fetchMeetings = async() => {
        const res = await fetch("http://localhost:5000/tasks")
        const data = await res.json()
        // console.log(data[0])   
        // return data
        // return data[0]
        this.setState({ meetings:data});   

    }

    render() {
        {this.fetchMeetings()}
        const container = 
        <div className={"zoom_background"} >
            {/* <div className={"zoom_main_container"}> */}
            <h2>Zoom Meeting Manager</h2>
            {/* <button onClick={this.executeScroll} className={'myBtn'}> Top </button> */}
            <button onClick={this.executeScroll}  className={"button_create"} > Create Meeting </button>
            {/* <br/><hr/><br/> */}
            <br/><br/>
            <ZoomInput/>
            {/* <br/><hr/><br/> */}
            <br/><br/>
            <ZoomList meetings={this.state.meetings}/>
            {/* <ZoomListItem meet={this.state.meetings}/> */}
            {/* <img onClick={this.showDiv} src={process.env.PUBLIC_URL + '/images/tianshougeclose.jpg'} alt="tianshougeclose" width="256" height="256" />
            <span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span> */}
            {/* </div> */}
        </div>
    
        // const largePic = 
        // <div >
        //     <div id="popWindow" onClick={this.closeDiv} className={"popWindow"} />
        //     <div id="maskLayer"  className={"maskLayer"} >  
        //     {/* <img id="enlargedpic" className={"pimg"} src={process.env.PUBLIC_URL + '/images/tianshougeclose.jpg'} alt="tianshougeclose" /> */}
        //         <img id="enlargedpic" className={"pimg"} src={this.state.largeSrc} alt="large" />
        //     </div>  
        //     {container}
        // </div>


        // if (this.state.isList === false) {
            return container;
        // }
        // else {return largePic;}

    }
}

export default Zoom;