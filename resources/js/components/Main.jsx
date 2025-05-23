import react from "react";
import ReactDom from 'react-dom/client';
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";

import Home from './Home';
import About from './About';
import Services from './Services';
import Auth from './auth/Auth';
import Dashboard from "./Dashboard";
import Blank from './Blank';
import Profile from './Profile';

import $ from 'jquery';

const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
$.ajaxSetup({
    beforeSend: function(xhr, settings){
        settings.url = window.baseUrl+ '/' + settings.url;
    },
    headers:{
        'X-CSRF-Token' : csrfToken
    }
});


function MyApp(){
    return (
        <BrowserRouter basename="/dealer">
            <Routes>
                <Route path='/' element={<Auth />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/blank" element={<Blank/>} />
                <Route path="/profile" element={<Profile/>} />
            </Routes>
        </BrowserRouter>
    );
}

ReactDom.createRoot(document.getElementById('app')).render(<MyApp />);
