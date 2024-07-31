import React from 'react';

const Blog = () => {
    return (
        <div className='m-5'>
            <h1> What are the different ways to manage a state in a React application?</h1>
            <p>Beau Carnes. React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself. React state management is basically half of a React app</p>
            <h1>How does prototypical inheritance work?</h1>
            <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
            <h1> What is a unit test? </h1>
            <p> A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. </p>
            <h1>Why should we write unit tests?</h1>
            <p>Well-written unit tests act  documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions. It simplifies the debugging process. Unit testing is an integral part of extreme programming.</p>
            <h1>React vs. Angular vs. Vue?</h1>
            <p>It's easier to learn Vue than angular and it reasonably takes the same amount of time and effort as learning react. Although some people argue that it's even easier to learn than react but that's of course subjective and varies from person to person.Popularity. According to a survey by Stack Overflow 40.13% of the developers believe that React is the most commonly used JavaScript Framework. Angular and Vue follow it with 22.96% and 18.97%, respectively.</p>

        </div>
    );
};

export default Blog;