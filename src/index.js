// https://segmentfault.com/a/1190000022315933
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Text from './Text';
import Table from './Table';
import Email from './Email';
import Images from './Images';
import Videos from './Videos';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

class Tab extends React.Component {
  render() {
    if (this.props.active === this.props.name) 
    {return ( <li onClick={() => this.props.changeID(this.props.name)}><b>{this.props.name}</b></li> );}
    return  ( <li onClick={() => this.props.changeID(this.props.name)}><a>{this.props.name}</a></li> );
  }
}

class TabList extends React.Component {
  render() {
    const Tabs = ['Text', 'Images', 'Videos', 'Table', 'Email'];
    const tabArray = Tabs.map( (tab) => <Tab name={tab} active={this.props.active} changeID={this.props.changeID}/> );
    return ( <ul> {tabArray} </ul>);
  }
}

class Body extends React.Component {

  render() {    
    if      ( this.props.active === "Text")   {return <Text   />;}
    else if ( this.props.active === "Table")  {return <Table  />;}
    else if ( this.props.active === "Email")  {return <Email  />;}
    else if ( this.props.active === "Images") {return <Images />;}
    else if ( this.props.active === "Videos") {return <Videos />;}
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef()
    this.handleScroll = this.handleScroll.bind(this)

    this.state = {
      Tab_Id: "Text",
      scrollTop: 0,
      butt: false
    };
  }
  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll, true)
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll, true)
  }
  handleScroll = () => {
    if (document.body.scrollTop > (0.25 * window.innerHeight) 
    || document.documentElement.scrollTop > (0.25 * window.innerHeight)) {
      this.setState({butt: true});
    }
    else{
      this.setState({butt: false});
    }
  }

  executeScroll = () => this.myRef.current.scrollIntoView();

  changeID = (tab) => {
    this.setState({Tab_Id: tab});
  }

  render() {
    if (this.state.butt) {
      return(
        //<>
        <div className="content-container" ref={this.myRef} onScroll={this.onScroll} >
          <TabList active={this.state.Tab_Id} changeID={this.changeID} />
          <Body active={this.state.Tab_Id}/>
          <button onClick={this.executeScroll} className={'myBtn'}> Top </button>
        </div>
        //</>
      );
    }
    else{
      return(
        //<>
        <div className="content-container" ref={this.myRef} onScroll={this.onScroll} >
          <TabList active={this.state.Tab_Id} changeID={this.changeID} />
          <Body active={this.state.Tab_Id}/>
        </div>
        //</>
      );
    }
  }
}
ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
