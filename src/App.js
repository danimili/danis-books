import './App.css';
import {books} from './books';
import {Book} from './book';

function App() {

const getBook = (id) =>  {
const book = books.find((book) => book.id === id)
}

  return (
    <>
    <h1>My Top 12 Books</h1>
    <div className="booklist">
      {books.map((book, index) => { 
        return (
          <Book {...book} key={book.id} getBook={getBook} number={index} />
        )
      })}
    </div>
    </>
  );
}

export default App;

