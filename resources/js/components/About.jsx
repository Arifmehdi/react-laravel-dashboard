import {Link} from 'react-router-dom';

function About() {
    return (
        <section>
            <Link to="/" > Home</Link>
            <Link to="/about" > About</Link>
            <Link to="/services" > Services</Link>
            <div>About Page 02 236</div>
        </section>
    );
}

export default About;
