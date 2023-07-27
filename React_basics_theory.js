/* React is a library. It's lighter and faster than other javascript frontend frameworks
Command to create a react appplication

npx create-react-app my-app

JSX - JavaScript XML
eg1: const element = <p>jjsdjflk </p>;
It's a syntax extension to Javascript.
eg2: 
 const myName = 'Nishank Yadav';
 const element = <P>Hi {myName}</p>


//Rendering Elements

Rendering Elements DOM
it's called root DOM node
<div id="root"></div>

//To render a React element, first we need to pass the DOM element to ReactDOM.createRoot(), 
and then we pass the react element to root.Render()
Syntax Eg:

const root = ReactDOM.createRoot(
    document.getElementById('root')
);
const element = <p>kjhsdjklj</p>
root.render(element);

Update the rendering element

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

function xyz() {
    const element = (
        <div>
            <p>jhjh</p>
            <p>right now it's {
                new Date().toLocaleTimestring()
            }.</p>
            </div>
    );
    root.render(element)
}

setInterval(xyz, 1000);


Components and Props
components are the mixture of elements and functions

Two types of components are there
1. Function Component
2. Class Component

function xyz(abc){
    return <p>{}</p>
}

abc argument mentioned above are called props(properties) in react

class nishank extends React.Component{
    render() {
        return <p>{this.props.age}</p>
    }
}

function nicky(props) {
    return <p> Hello {props.name} </p>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <nicky name="Elvish" />;
root.render(element);

State and Lifecycle

We can say that state somehow similar to props
this.prop.date
this.state.date

class Clock extends React.Component {
    render(){
        return (
            <div>
            <p>hhhj</p>
            <p>{this.props.date.toLocaleTimeString()}.</p>
        );
    }
}

Add Local State to this class
1. replaced this.date with this.state
class Clock extends React.Component {
    render(){
        return (
            <div>
            <p>hhhj</p>
            <p>{this.state.date.toLocaleTimeString()}.</p>
        );
    }
}
2. add a constructor which assigns initial this.state
class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    render(){
        return (
            <div>
            <p>hhhj</p>
            <p>{this.state.date.toLocaleTimeString()}.</p>
        );
    }
}
3. date prop remove from the element
root.render(<clock />);
class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    render(){
        return (
            <div>
            <p>hhhj</p>
            <p>{this.state.date.toLocaleTimeString()}.</p>
        );
    }
}

const root = reactDOM.createRoot(document.getElementById('root));
root.render(<clock />);

Adding Lifecycle methods to a class
Mounting: We need to set up a timer whenever Clock is rendered to the DOM. It is called Mounting  
unMounting: When we clear this timer. It's called unmounting.

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount(){ // these methoda re called lifecycle methods
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    render(){
        return (
            <div>
            <p>hhhj</p>
            <p>{this.state.date.toLocaleTimeString()}.</p>
        );
    }
}

componentDidMount() method runs after the component output has been rendered to the DOM.

Now we will implement tick() that will run every second the clock component 
and it will use this.setState() to schedule updates to the component

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount(){ // these methoda re called lifecycle methods
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }

    render(){
        return (
            <div>
            <p>hhhj</p>
            <p>{this.state.date.toLocaleTimeString()}.</p>
        );
    }
}

const root = ReactDOM.createRoot(
    document.getElementById('root)
);
root.render(<Clock />);

Handling Events
<button onClick="myFubction()"></button>
In React
<button onClick={myFubction}></button>

function yu(){
    function handleSubmit(e){
        e.preventDefault();
        console.log('You hit the button!!...congratulations)
    }

    return (
        <button onClick={myFubction}></button>
    )
}

///Forms
In react setState() updates the the forms data
In react controlled component - Input form element whose value is controlled by 
React is called controlled component

Eg: 

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}
        this.handleChange = 
        this.handleChange.bind(this);
        this.handleSubmit = 
        this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.state.value
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit=
            {this.handleSubmit}>
            <lable> Name:
            <input type="text" value=
            {this.state.vale} onChange=
            {this.handleChange} />
            </lable>
            <input type="submit"
            value="submit" />
            </form>
        );
    }

}

Explanation: Value attribute is set on our form element, this.state.value 
helps displaying the values.
handleChange will be active / runs on every time the end user updates in the form.
With the controlled component the inputs value is managed by React state.

///React DOM
react dom package which can be used in ract app
import * as ReactDOM from 'react-dom';

Methods:
render()
findDOMNode()
unmountComponentatNode()
createPortal()
hydrate()
flushSync()

//do research on new methods for render and hydrate

createPortal(child, container)

flushSync(callback)

unmountComponentatNode(container) - it has been replaced with root.unmount

//React DOM client
import * as ReactDOM from 'react-dom/client';
//React DOM server
import * as ReactDOM from 'react-dom/server';

///Hooks

Hooks is a feature in React which lets us use state and other 
features too without making class component.

import React, { useState, useEffect } from 'react';

function sdf() {
    const [count, setCount] = useState(0);

    return (
        <div>
        <p> You clicked {count} times</p>
            <button onClick={() =>
            setCount(count + 1)
            }>Hit Me!!</button>
        </div>
    )
}

useState is ahook which we imported in the starting of the script. 
We called it inside a function component and added a local state 
to it and increamented by one every time user clicks the button.
useState returns a pair, which is the current state and the function 
which updates it.

///Declairing multiple state variables

function sdf() {
    const [count, setCount] = useState(0);
    const [effort, seteffort] = useState('hard');
    const [cheese, setCheese] = useState('Morzilla');
    const [fruit, setFruit] = useState('Lichi');
    return (
        <div>
        <p> You clicked {count} times</p>
            <button onClick={() =>
            setCount(count + 1)
            }>Hit Me!!</button>
        </div>
    )
}

useEffect - It serves the purpose which componentDidMount,
 Component DidUpdate and componentWillUnmount


///Rules
1. we can call it from the top level. We cant use them inside a loop
2. Hooks can be called from function component


import React, {useState, useEfect} from 'react';

function useMycourse(courseID) {
    const [isAvailable, setAvailable] = 
    useState(null);
    .....

    useEffect(() => {
        ....
        ...
        ...

    })
    return isAvailable;
}


functio bnm(){
    const jhgakjh = isAvailable(props.courseID)
}

useReducer()