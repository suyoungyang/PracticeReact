import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
//import { render } from '@testing-library/react';
// 2.JSX 소개
//const name = 'Josh Perez';
//const element = <h1>Hello, {name}</h1>;

/*function formatName(user){
    return user.firstName +' '+user.lastName;
}
const user = {
    firstName:'Harper',
    lastName:'Perez'
};
const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);*/

/*function getGreeting(user){
    if(user){
    return  <h1>hello, {formatName(user)}</h1>;
    }
    return <h1> hello, Stranger.</h1>;
}
function formatName(user) {
    return user.firstName +' '+user.lastName;
}
const user = {
    firstName : 'suyoung',
    lastName : 'Yang'
};
const element =(
    <div>{getGreeting(user)}</div>
);*/

//이미지 삽입
/*const user = {
    avatarUrl : 'logo192.png'
}
const element = <img src={user.avatarUrl}/>;*/

//input 
/*const title = <input type="text" id="text"></input>;

const element = (
<h1>{title}</h1>
);*/

//두가지 element 같은 효과
/*const element = (
    <h1 className='greeting'>
        Hello, world!
    </h1>
);

const element = React.createElement(
    'h1',
    {className : 'greeting'},
    'Hello, world!'  
);*/


//3.엘리먼트 렌더링
//function 내 render가 있을 경우 setInterval로 초마다 호출
/*function tick(){
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(
        element
        , document.getElementById('root'));
}

setInterval(tick,1000)
*/

//4. Component 와 Props
//하단의 function Welcome 과 class Welcome은 동일한 효과를 나타낸다.
/*function Welcome(props){
    return <h1>Hello, {props.name}</h1>;
}

class Welcome extends React.Component{
    render(){
        return <h1>Hello, {this.props.name}</h1>;
    }
}*/

//엘리먼트를 사용자 정의 컴포넌트로도 나타낼 수 있다.
//컴포넌트의 이름은 항상 대문자로 시작한다.
/*const element = <Welcome name="Sara"/>;
ReactDOM.render(
  element,
  document.getElementById('root')  
);*/


/*function App(){
    return(
        <div>
            <Welcome name="Sara"/>
            <Welcome name="Cahal"/>
            <Welcome name="Edite"/>
        </div>
    );
}*/
//props는 순수 함수처럼 동작해야 한다 
/*function Avatar(props){
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
            />
    );
}
function UserInfo(props){
    return (
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}
function Comment(props){
    return (
        <div className="Comment">
            <UserInfo user={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            
        </div>
    );
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);*/

/*function tick(){
    const element = (
        <div>
            <h1>Hello,world!</h1>
            <h2>It it {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(
        element,document.getElementById('root')
    );
}*/
//캡슐화
/*function Clock(props){
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}*/

//함수에서 클래스로 변환하기 
/*class Clock extends React.Component {
    render(){
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}*/

//state 추가 하기 
/*class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={date:new Date()};
    }
    render(){
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

function tick(){
    ReactDOM.render(
        <Clock />,
        document.getElementById('root')
    );
}

setInterval(tick,1000);
*/

//생명주기 메서드를 클래스에 추가하기
/*class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={date:new Date()};
    }
    //생명주기 메서드 tick() 메서드 호출을 위한 타이머 설정
    componentDidMount(){
        this.timerID = setInterval(
            ()=>this.tick(),
            1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    
    tick(){
        this.setState({
            date:new Date()
        });
    }
    //화면에 표시 되야 할 내용을 알게 함
    render(){
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);
serviceWorker.unregister();
*/

//6. 이벤트 처리하기
/*
function ActionLink() {
    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }
  
    return (
      <a href="www.naver.com" onClick={handleClick}>
        Click me
      </a>
    );
  }

  ReactDOM.render(
    <ActionLink />,
    document.getElementById('root')
);
*/

/*class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }
  
  ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
  );
*/

//onClick={this.handleClick} () 사용없이 메서드 참조할때, 해당 메서드를 바인딩 해야함
//방법1. 바인드하기
/*class LoggingButton extends React.Component {
    // 이 문법은 `this`가 handleClick 내에서 바인딩되도록 합니다.
    // 주의: 이 문법은 *실험적인* 문법입니다.
    handleClick() {
      console.log('this is:', this);
    }
  
    render() {
      return (
        <button onClick={this.handleClick.bind(this)}>
          Click me
        </button>
      );
    }
  }
  ReactDOM.render(
    <LoggingButton />,
    document.getElementById('root')
  );*/

//만약 bind 호출이 불편하다면 
//방법2. 클래스 필드를 사용
/*class LoggingButton extends React.Component {
    // 이 문법은 `this`가 handleClick 내에서 바인딩되도록 합니다.
    // 주의: 이 문법은 *실험적인* 문법입니다.
    handleClick = () => {
      console.log('this is:', this);
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          Click me
        </button>
      );
    }
  }
  ReactDOM.render(
    <LoggingButton />,
    document.getElementById('root')
  );*/
  //방법3.콜백에 화살표 함수를 이용
  /*class LoggingButton extends React.Component {
    handleClick() {
      console.log('this is:', this);
    }
  
    render() {
      // 이 문법은 `this`가 handleClick 내에서 바인딩되도록 합니다.
      return (
        <button onClick={(e) => this.handleClick(e)}>
          Click me
        </button>
      );
    }
  }
  ReactDOM.render(
    <LoggingButton />,
    document.getElementById('root')
  );*/

  