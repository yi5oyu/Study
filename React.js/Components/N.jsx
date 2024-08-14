import React, {useState} from 'react';

function N(){

    const [book, setBook] = useState([]);
    const [bookYear, setBookYear] = useState(new Date().getFullYear());
    const [bookAuthor, setBookAuthor] = useState("");
    function handleAddBook(){
        const newBook = {year: bookYear, Author: bookAuthor};
        setBook(b => [...b, newBook]);

        // 초기화
        setBookYear(new Date().getFullYear());
        setBookAuthor("");
    }
    function handleRemoveBook(index){
        setBook(b => b.filter((_,i) => i !== index));
    }
    function handleYearChange(event){
        setBookYear(event.target.value);
    }
    function handleAuthorChange(event){
        setBookAuthor(event.target.value);
    }

    return(
        <div>
            <h2>책 List</h2>
            <ul>
                {book.map((b,index) =>
                    <li key={index} onClick={() => handleRemoveBook(index)}>
                        {b.year} {b.Author}
                    </li>
                 )}
            </ul>
            <input type="number" value={bookYear} onChange={handleYearChange}/>
            <input type="text" value={bookAuthor} onChange={handleAuthorChange} placeholder="저자입력"/>
            <button onClick={handleAddBook} >책 추가</button>
        </div>
    );
}

export default N
