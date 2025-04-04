import { Link } from 'react-router-dom';
import '../styles/Success.css'; // Import custom styles

const Success = () => {
    return (
        <>
        <div className="success-container">
            <h1>🎉 Thank You!</h1>
            <p>Your message has been sent successfully. We'll get back to you soon.</p>
            <Link to="/" className="back-home">Back to Home</Link>
        </div>
        </>
    );
};

export default Success;
