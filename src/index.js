import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
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
function tick(){
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



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
