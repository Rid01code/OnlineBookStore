import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../features/bookSlice';
import { useState } from 'react';

function AddBook() {
    const [form, setForm] = useState({
        title: '',
        author: '',
        category: '',
        description: '',
        rating: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.title || !form.author || !form.category || !form.description || !form.rating) {
            alert('All fields are required');
            return;
        }
        dispatch(addBook(form));
        navigate(`/books/${form.category}`);
    };

    return (
        <div className="max-w-2xl mx-auto p-8 bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl animate-fade-in mt-10">
            <h2 className="section-header">📚 Add a New Book</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                <input
                    type="text"
                    name="title"
                    placeholder="Enter Book Title"
                    value={form.title}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="author"
                    placeholder="Author Name"
                    value={form.author}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="category"
                    placeholder="Category (e.g., Fiction, Sci-Fi)"
                    value={form.category}
                    onChange={handleChange}
                />
                <textarea
                    name="description"
                    rows={4}
                    placeholder="Book Description"
                    value={form.description}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="rating"
                    step="0.1"
                    max="5"
                    placeholder="Rating (out of 5)"
                    value={form.rating}
                    onChange={handleChange}
                />
                <div className="flex justify-center">
                    <button type="submit" className="primary">
                        ➕ Add Book
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddBook;
