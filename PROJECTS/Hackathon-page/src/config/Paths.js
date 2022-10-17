import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from '../pages/home/Home';
import Details from '../pages/details/Details';
import Create from '../pages/create.jsx/Create';
import Edit from '../pages/editPage/Edit';

const Paths = () => {
    return (
        <div>
        <Routes>

            <Route
                path='/create'
                element={<Create/>}
            />
            <Route
                path='/details'
                element={<Details/>}
            />
            <Route
                path='/edit'
                element={<Edit/>}
            />
            <Route
                exact
                path='/'
                element={<Home/>}
            />
            
        </Routes>
        </div>
        
    );
}

export default Paths;