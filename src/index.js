import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { render } from '@testing-library/react';
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
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.setState((state, props) => ({
            counter: state.counter + props.increment
          }));
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