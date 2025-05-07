import react from "react";
import ReactDom from 'react-dom/client';
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";

import Home from './Home';
import About from './About';
import Services from './Services';
import Auth from './auth/Auth';
import Dashboard from "./Dashboard";

function MyApp(){
    return (
        <BrowserRouter basename="/dealer">
            <Routes>
                <Route path='/' element={<Auth />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
    );
}

ReactDom.createRoot(document.getElementById('app')).render(<MyApp />);
