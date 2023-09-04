import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {books} from "./books";
import Book from './Book';
// function Greeting() {
//   return (
//     <div>
//       <Booklist />
//     </div>
//   );
// }


const inlineStyling = {
  color: "#617d98",
  fontSize: "0.75rem",
  marginTop: "0.5rem",
};
const Booklist = () => {
 
  const getBook = (id)=>{
    const book = books.find((book)=>book.id === id);
    console.log(book);
  }
  
  return (
    <section className="booklist">
      {/* <EventExamples></EventExamples> */}
      {books.map((book, index) => {
        //const { img, title, author, id } = book;
        return <Book {...book} key={book.id} getBook = {getBook}></Book>;
      })}
    </section>
  );
};

// const EventExamples = () => {
//   const handleButtonClick = ()=>{
//     alert("Handle Form INput");
//   }
//   const handleFormInput = (e)=>{
//     //console.log(e);
//      console.log("Something was typed");
//   }
//    const handleFormSubmission = (e)=>{
//     e.preventDefault();
//     //console.log(e);
//      console.log("Form Submitted");
//   }
//   return <section>
//     <form onSubmit={handleFormSubmission}>
//       <h2>Typical Form</h2>
//       <input type="text" onChange={handleFormInput} name="example" style={{margin:'1rem 0'}}></input>
    
//     <div>
//       <button type="submit">Submit</button>
//     </div>
//     </form>
//     <button onClick={handleButtonClick}>click me</button>
//   </section>;
// };



const Image = () => {
  return <img src="./images/pic.jpg" />;
};
const Title = () => {
  return <h2>Book Title</h2>;
};

const Author = () => {
  return <h4 style={inlineStyling}> Author </h4>;
};

const Person = () => <h2>John Doe</h2>;
const Message = () => {
  return <p>This is a message</p>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
