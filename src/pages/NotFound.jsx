import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="text-center p-10">
            <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
            <p className="mt-4">Sorry, the page you're looking for doesn't exist.</p>
            <Link to="/" className="text-indigo-600 underline mt-4 inline-block">Back to Home</Link>
        </div>
    );
}

export default NotFound;