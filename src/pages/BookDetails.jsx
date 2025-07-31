import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BookDetails() {
    const { id } = useParams();
    const book = useSelector((state) =>
        state.books.books.find((b) => b.id === id)
    );

    if (!book)
        return (
            <div className="p-6 text-center text-xl font-semibold text-red-600 animate-fade-in">
                ❌ Book not found.
            </div>
        );

    return (
        <div className="max-w-3xl mx-auto p-8 bg-white/70 backdrop-blur-md shadow-xl rounded-2xl animate-fade-in mt-10" >
            <h2 className="text-3xl font-bold text-pink-600 mb-4">{book.title}</h2>
            <p className="text-xl font-medium text-gray-800 mb-2">👤 by {book.author}</p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">{book.description}</p>
            <p className="text-lg font-semibold text-violet-600 mb-6">⭐ Rating: {book.rating} / 5</p>

            <Link
                to={`/books/${book.category}`}
                className="back-link font-medium hover:text-violet-600 transition-all duration-300"
            >
                ← Back to {book.category} Books
            </Link>
        </div>
    );
}

export default BookDetails;
