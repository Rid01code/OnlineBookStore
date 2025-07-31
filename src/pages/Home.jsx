import { Link } from 'react-router-dom';

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi'];

const popular = [
    { id: '1', title: 'Atomic Habits' },
    { id: '2', title: 'Dune' },
];

function Home() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-12 animate-fade-in">
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
                <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-700 mb-6">
                    📖 Welcome to the Online Library
                </h2>

                <div className="mb-10">
                    <h3 className="text-2xl font-bold text-pink-600 mb-3">📚 Categories</h3>
                    <div className="flex flex-wrap gap-4">
                        {categories.map((cat) => (
                            <Link
                                key={cat}
                                to={`/books/${cat}`}
                                className="px-4 py-2 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 text-white font-medium shadow-md hover:scale-105 transition-transform duration-300"
                            >
                                {cat}
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-pink-600 mb-3">🔥 Popular Books</h3>
                    <ul className="space-y-3">
                        {popular.map((book) => (
                            <li key={book.id}>
                                <Link
                                    to={`/books/details/${book.id}`}
                                    className="block px-4 py-3 bg-gradient-to-r from-yellow-200 to-pink-100 rounded-lg shadow hover:shadow-lg hover:scale-[1.02] transition-all duration-300 font-semibold text-gray-800"
                                >
                                    {book.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;
