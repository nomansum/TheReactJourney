import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// function Greeting() {
//   return (
//     <div>
//       <Booklist />
//     </div>
//   );
// }

const books = [
  {
    title: "Best selling book",
    img: "./images/pic.jpg",
    author: "Shibli Noman Sunny",
    id: 1,
  },
  {
    title: "Best selling book 2 ",
    img: "./images/pic.jpg",
    author: "Mohammad Shibli Noman SUnny",
    id: 2,
  },
  {
    title: "Best selling book 3 ",
    img: "./images/pic.jpg",
    author: "Mohammad Shibli Noman SUnny",
    id: 3,
  },
];

const inlineStyling = {
  color: "#617d98",
  fontSize: "0.75rem",
  marginTop: "0.5rem",
};
const Booklist = () => {

  const someValue = "ShakeAndBake";
  const displayValue = ()=>{
    console.log(someValue);
  }

  return (
    <section className="booklist">
      {/* <EventExamples></EventExamples> */}
      {books.map((book, index) => {
        //const { img, title, author, id } = book;
        return <Book {...book} key={book.id} displayValue = {displayValue}></Book>;
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

const Book = (props) => {
  //const title = "This is a good book";
  const displayTitle=()=>{
    console.log(props.title);
  }
  return (
    <article className="book">
      <img src={props.img} />
      <h2>{props.title}</h2>
      <h4 style={inlineStyling}>{props.author}</h4>
      {props.children}
      <button onClick={props.displayValue}>Display Title</button>
    </article>
  );
};

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
