






const inlineStyling = {
  color: "#617d98",
  fontSize: "0.75rem",
  marginTop: "0.5rem",
};



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
      <button onClick={()=>{
        props.getBook(props.id);
      }}>Display Title</button>
    </article>
  );
};
export default Book;