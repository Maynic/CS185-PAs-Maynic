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
    deleteTask = async (id) => {
        console.log(`large trigger`)   
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE',
        })

        // setTasks(tasks.filter((task) => task.id !== id))
    }
    render() {
        // console.log(this.props.meet.id)   

        if(this.props.meet.important){
            return <div  className={"meet_item"}>
            <div className={"meet_item_button"}>
                <span className={"button_ed"}>
                    <img onClick={() => this.props.changeID(this.props.meet)}  src={process.env.PUBLIC_URL + '/edit.svg'} alt="ti" width="28" height="28"/>
                </span>
                <span>&nbsp;</span>
                <span className={"button_ed"}>
                    <img onClick={() => this.deleteTask(this.props.meet.id)}
                     src={process.env.PUBLIC_URL + '/delete.svg'} alt="ti" width="28" height="28"/>
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
                    <img onClick={() => this.props.changeID(this.props.meet)}  src={process.env.PUBLIC_URL + '/edit.svg'} alt="ti" width="28" height="28"/>
                </span>
                <span>&nbsp;</span>
                <span className={"button_ed"}>
                    <img onClick={() => this.deleteTask(this.props.meet.id)} src={process.env.PUBLIC_URL + '/delete.svg'} alt="ti" width="28" height="28"/>
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
        const meetsArray = this.props.meetings
        if(meetsArray.length === 0) {
            return <h3>No scheduled meeting!</h3>
        }
        const meets = meetsArray.map((meet) => 
        <div>
        <ZoomListItem key={meet.id} meet={meet} changeID={this.props.changeID}/>
        <br/>
        </div>
        )
        return ( <div> {meets} </div>);
      }
}
class ZoomInput extends React.Component {

    saveMeeting = async() => {
        var title = document.getElementById('title').value;
        var day = document.getElementById('meeting-time').value;
        var textInfor = document.getElementById('link').value;
        var important = document.getElementById('important').value;
        if (title.length > 30) {
            alert('Title can not be more than 30 characters!')
            return
        }
        if (!title) {
            alert('Please add a title!')
            return
        }
        if ( !textInfor.includes("zoom") ){
            alert('Make sure your link contains "zoom"!')
            return
        }
        // console.log(`title: ${title}`)   
        // console.log(`date: ${day}`)   
        // console.log(`link: ${textInfor}`)   
        // console.log(`important: ${important}`)   

        var task = {title, day, textInfor, important}
        const res = await fetch("http://localhost:5000/tasks", {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(task),
        })
    }
    updateMeeting = async(id) => {
        var title = document.getElementById('title').value;
        var day = document.getElementById('meeting-time').value;
        var textInfor = document.getElementById('link').value;
        var important = document.getElementById('important').value;
        if (title.length > 30) {
            alert('Title can not be more than 30 characters!')
            return
        }
        if (!title) {
            alert('Please add a title!')
            return
        }
        if ( !textInfor.includes("zoom") ){
            alert('Make sure your link contains "zoom"!')
            return
        }
        var task = {title, day, textInfor, important}

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify(task),
          })

    }

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

        // {this.props.editID.title}
        console.log(`meet: ${this.props.editId}`)   

        if(this.props.editId != null){
            var input_title = 
            <div key={this.props.editId.title}>
            <label for="title">Title: </label><br/>
            <input type="text" id="title" name="title" size="24" defaultValue={this.props.editId.title}/>
            </div>
            var input_date = 
            <div>
            <label for="meeting-time">Date: </label><br/>
            <input type="datetime-local" id="meeting-time"
            name="meeting-time" value={ct} min={ct} required/>
            </div>
    
            var input_link = 
            <div key={this.props.editId.textInfor}>
            <label for="link">Zoom Link: </label><br/>
            <input type="url" id="link" name="link" size="24" defaultValue={this.props.editId.textInfor}/>
            </div>
            
            var input_important = 
            <div>
            <label for="important">Important: </label>
            <input type="checkbox" id="important" name="important" checked={this.props.editId.important}/>
            </div>

            var button_update = <button
            onClick={() => this.updateMeeting(this.props.editId.id)}
            id="button_save"  className={"button_save"} > Update Meeting </button>

            var button_cancel = <button onClick={() => this.props.changeID(this.props.editId)} id="button_save"  
            className={"button_save"} > Cancel </button>

            var container = 
            <div id="zoom_input"  className={"zoom_input"} >  
                <h1 className={"zoom_input_title"}>Meeting Info</h1>
                {input_title}
                {input_date}
                {input_link}
                {input_important}
                <br/>
                {button_update}
                <br/>
                {button_cancel}
            </div>
            return container;
        }
        else{
            var input_title = 
            <div>
            <label for="title">Title: </label><br/>
            <input type="text" id="title" name="title" size="24" />
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
            <input type="url" id="link" name="link" size="24"/>
            </div>
            
            var input_important = 
            <div>
            <label for="important">Important: </label>
            <input type="checkbox" id="important" name="important"/>
            </div>
            
            var button_save = <button onClick={this.saveMeeting} id="button_save"  className={"button_save"} > Save Meeting </button>
            
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

}
class Zoom extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Tab_Id: "Zoom",
        isList:true,
        largeSrc:'/images/tianshougeclose.jpg',
        meetings:[],
        // editing:false,
        editID:null
      };
    }
    closeCreate = () => {
        this.setState({ isList:true });   
    }
    showCreate = () => {
        this.setState({ isList:false});
    }

    changeID = (id) => {
        if(this.state.editID != null && this.state.editID.id == id.id){
            this.setState({editID:null});
        }
        else{this.setState({editID:id});}
      }

    fetchMeetings = async() => {
        const res = await fetch("http://localhost:5000/tasks")
        const data = await res.json()
        // console.log(data[0])   
        this.setState({ meetings:data});   
    }

    render() {
        {this.fetchMeetings()}

        const container_create = 
        <div className={"zoom_background"} >
            <h2>Zoom Meeting Manager</h2>
            <button onClick={this.closeCreate}  className={"button_create"} > Full Schedule </button>
            <br/><br/>
            <ZoomInput editId={this.state.editID}/>
        </div>

        // const container_top = <div>
                
        // </div>
        var container_list = <div></div>
        if(this.state.editID != null){
            // const edit = <div>
            //     {container_list}
            // </div>
            container_list = 
            <div className={"zoom_background"} >
                <h2>Zoom Meeting Manager</h2>
                <button onClick={this.showCreate}  className={"button_create"} > Create Meeting </button>
                <br/><br/>
                <ZoomInput editId={this.state.editID} changeID={this.changeID}/>
                <br/><br/>
                <ZoomList meetings={this.state.meetings} changeID={this.changeID}/>
            </div>
        }
        else{
            container_list = <div className={"zoom_background"} >
                <h2>Zoom Meeting Manager</h2>
                <button onClick={this.showCreate}  className={"button_create"} > Create Meeting </button>
                <br/><br/>
                <ZoomList meetings={this.state.meetings} changeID={this.changeID}/>
            </div>
        }
        // console.log(this.state.isList)   

        if (this.state.isList) {
            return container_list;
        }
        else {return container_create;}

    }
}

export default Zoom;