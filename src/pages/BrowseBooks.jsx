import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function BrowseBooks() {
    const { category } = useParams();
    const books = useSelector((state) => state.books.books);
    const [query, setQuery] = useState('');

    const filtered = books.filter(
        (b) =>
            b.category.toLowerCase() === category.toLowerCase() &&
            (b.title.toLowerCase().includes(query.toLowerCase()) ||
                b.author.toLowerCase().includes(query.toLowerCase()))
    );

    return (
        <div className="max-w-6xl mx-auto px-6 py-12 animate-fade-in">
            <h2 className="text-3xl font-extrabold text-pink-600 mb-6 tracking-tight">
                📚 {category} Books
            </h2>

            <input
                type="text"
                placeholder="🔍 Search by title or author..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="mb-8 p-4 rounded-xl border border-pink-300 shadow-sm w-full focus:ring-2 focus:ring-pink-400 transition-all duration-300"
            />

            {filtered.length > 0 ? (
                <div className="book-list">
                    {filtered.map((book) => (
                        <div
                            key={book.id}
                            className="book-card transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <h3 className="text-xl font-bold text-gray-800">{book.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
                            <Link
                                to={`/books/details/${book.id}`}
                                className="inline-block text-sm font-medium text-violet-600 hover:underline mt-2"
                            >
                                ➤ View Details
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-lg text-red-600 font-semibold">🚫 No books found.</p>
            )}
        </div>
    );
}

export default BrowseBooks;
