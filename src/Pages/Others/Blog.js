import React from "react";
import "./Blog.css";

const Blog = () => {
   return (
      <div className="blog-section">
         <h1>Question and Answer:-</h1>
         <div className="question">
            <h3>
               1. What are the different ways to manage a state in a React
               application?
            </h3>
            <div>
               <p>
                  There are four main types of state you need to properly manage
                  in your React apps: <br />{" "}
                  <span className="text-xl fond-bold text-red-500">
                     1.Local state:
                  </span>{" "}
                  Local state is data we manage in one or another component.
                  Local state is most often managed in React using the useState
                  hook. <br />{" "}
                  <span className="text-xl fond-bold text-red-500">
                     2.Global state:
                  </span>{" "}
                  Global state is necessary when we want to get and update data
                  anywhere in our app, or in multiple components at least.
                  <br />{" "}
                  <span className="text-xl fond-bold text-red-500">
                     3.Server state:
                  </span>{" "}
                  Server state is a simple concept, but can be hard to manage
                  alongside all of our local and global UI state. <br />{" "}
                  <span  className="text-xl fond-bold text-red-500">4.URL state</span>: URL state is often missing as a
                  category of state, but it is an important one. In many cases,
                  a lot of major parts of our application rely upon accessing
                  URL state
               </p>
            </div>
         </div>
         <div className="question">
            <h3>2. How does prototypical inheritance work?</h3>
            <div>
               <p>
                  The Prototypal Inheritance is a feature in javascript used to
                  add methods and properties in objects. It is a method by which
                  an object can inherit the properties and methods of another
                  object. Traditionally, in order to get and set the
                  [[Prototype]] of an object, we use Object. getPrototypeOf and
                  Object.
               </p>
            </div>
         </div>
         <div className="question">
            <h3>3. What is a unit test? Why should we write unit tests?</h3>
            <div>
               <p>
                  A unit test is a way of testing a unit - the smallest piece of
                  code that can be logically isolated in a system. In most
                  programming languages, that is a function, a subroutine, a
                  method or property. The isolated part of the definition is
                  important.
               </p>
               <br />
               <p>
                  They enable you to catch bugs early in the development
                  process. Automated unit tests help a great deal with
                  regression testing. They detect code smells in your codebase.
                  For example, if you're having a hard time writing unit tests
                  for a piece of code, it might be a sign that your function is
                  too complex.
               </p>
            </div>
         </div>
         <div className="question">
            <h3>4. React vs. Angular vs. Vue?</h3>
            <div>
               <p>
                  Both - Angular JS and React JS frameworks are used to create
                  web interfaces for front end development. Angular is Google's
                  matured and advanced JavaScript framework based on TypeScript,
                  whereas Vue is a progressive open-source front-end JavaScript
                  framework created by Evan You.
               </p>
            </div>
         </div>
      </div>
   );
};

export default Blog;
