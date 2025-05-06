import { Link } from "react-router-dom";

function Home() {
    return (
        <section>
            <Link to="/" > Home</Link>
            <Link to="/about" > About</Link>
            <Link to="/services" > Services</Link>
            <div>Home Page 02 236</div>
        </section>
    );
}

export default Home;
