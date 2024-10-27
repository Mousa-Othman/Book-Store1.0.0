import { Component } from "react";
import './App.css'; // ربط ملف App.css
import CustomNavbar from './components/Navbar/CustomNavbar.jsx';
import Header from './components/Header/Header.jsx'; 
import Footer from './components/Footer/Footer.jsx';  
import BookList from './components/BookList/BookList.jsx';  
import AddBook from './components/AddBook/AddBook.jsx';  
import EditProduct from './components/EditProduct/EditProduct.jsx'; // إضافة مكون تعديل الكتاب
import MultiSearchComponent from './components/search/MultiSearchComponent.jsx'
import CategoriesComponent from './components/Categories/CategoriesComponent.jsx'
import axios from 'axios';

class App extends Component {
    state = {
        books: [],
        selectedBookId: null, // حالة جديدة للكتاب المختار
        editSuccess: false, // حالة جديدة لمعرفة ما إذا كان التعديل ناجحًا
    };

    componentDidMount() {
        this.fetchBooks();
    }

    fetchBooks = async (url = 'http://mywebsite-bookstore.somee.com/api/Books') => {
        try {
            const response = await axios.get(url);
            this.setState({ books: response.data });
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };

    handleBookAdded = (newBook) => {
        this.setState((prevState) => ({
            books: [...prevState.books, newBook]
        }));
    };

    handleBookSelect = (bookId) => {
        this.setState({ selectedBookId: bookId }); // تحديث الكتاب المختار
    };

    handleEditComplete = () => {
        this.setState({ selectedBookId: null, editSuccess: true }); // إعادة تعيين الكتاب المختار بعد إتمام التعديل
        this.fetchBooks(); // جلب البيانات مرة أخرى لتحديث القائمة
    };

    handleBookDelete = (bookId) => {
        this.setState((prevState) => ({
            books: prevState.books.filter(book => book.id !== bookId) // حذف الكتاب من القائمة
        }));
    };

    handleSearchResults = (filteredBooks) => {
        this.setState({ books: filteredBooks });
    };

    render() {
        return (
            <div>
                <CustomNavbar />
                <Header />
                <CategoriesComponent/>
                <div className="pt-5">
                    {/* عرض EditProduct إذا تم اختيار كتاب */}
                    {this.state.selectedBookId ? (
                        <div className="overlay">
                            <EditProduct 
                                bookId={this.state.selectedBookId} 
                                onEditComplete={this.handleEditComplete} 
                            />
                        </div>
                    ) : (
                        <BookList 
                            books={this.state.books}
                            onSelectBook={this.handleBookSelect} 
                            onDeleteBook={this.handleBookDelete} // تمرير دالة الحذف
                        />
                    )}
                </div>
                <AddBook onBookAdded={this.handleBookAdded} />
                
                {/* تمرير دالة البحث إلى مكون البحث */}
                <MultiSearchComponent onSearchResults={this.handleSearchResults} />

                <Footer />
            </div>
        );
    }
}

export default App;
