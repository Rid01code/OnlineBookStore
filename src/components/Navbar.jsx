import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-pink-400 via-fuchsia-500 to-indigo-500 text-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight drop-shadow-sm">📚 MyLibrary</h1>
                <div className="space-x-6 text-lg font-medium">
                    <Link to="/" className="hover:text-yellow-300 transition duration-300 ease-in-out">Home</Link>
                    <Link to="/books/Fiction" className="hover:text-yellow-300 transition duration-300 ease-in-out">Browse Books</Link>
                    <Link to="/add" className="hover:text-yellow-300 transition duration-300 ease-in-out">Add Book</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
