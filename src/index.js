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

const firstBook = {
  title: "Best selling book",
  img: "./images/pic.jpg",
  author: "Shibli Noman Sunny",
};
const secondBook = {
  title: "Best selling book 2 ",
  img: "./images/newpic.jpg",
  author: "Mohammad Shibli Noman SUnny",
};
const thirdBook = {
  title: "Best selling book 3 ",
  img: "./images/newpic.jpg",
  author: "Mohammad Shibli Noman SUnny",
};

const inlineStyling = {
  color: "#617d98",
  fontSize: "0.75rem",
  marginTop: "0.5rem",
};
const Booklist = () => {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>Lorem IPSUM</p>
      </Book>

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      ></Book>

      <Book
        img={thirdBook.img}
        title={thirdBook.title}
        author={thirdBook.author}
      ></Book>
    </section>
  );
};

const Book = (props) => {
  //const title = "This is a good book";
  return (
    <article className="book">
      <img src={props.img} />
      <h2>{props.title}</h2>
      <h4 style={inlineStyling}>{props.author}</h4>
      {props.children}
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
