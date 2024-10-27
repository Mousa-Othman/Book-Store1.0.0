import React from 'react';
import BookCard from '../BookCard/BookCard.jsx'; // تأكد من أن المسار صحيح
import './BookList.module.css'; // تأكد من استيراد ملف CSS المناسب

const BookList = ({ books, onSelectBook, onDeleteBook }) => {
    return (
        <div className="book-list-container container">
            <div className="book-list d-flex flex-wrap row">
                {books.map(book => (
                    <div key={book.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <BookCard 
                            book={book} 
                            onSelect={onSelectBook} 
                            onDelete={onDeleteBook} // تمرير دالة الحذف إلى BookCard
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookList;
