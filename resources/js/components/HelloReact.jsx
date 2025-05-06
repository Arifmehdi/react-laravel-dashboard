import react from 'react';
import ReactDom from 'react-dom/client';

export default function HelloReact(){
    return (
        <section>
            <h1>Welcome world Foreign gapla pura maser vara </h1>
            <h3>React JS</h3>
        </section>

    );
}

const container = document.getElementById('hello-react');
const root = ReactDom.createRoot(container);
root.render(<HelloReact/>)


