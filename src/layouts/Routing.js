import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout';

import HomePage from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Todo from '../pages/Todo';
import * as Cp from '../pages/ContentMap'

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                {
                    Cp.arts.all.map(art => {
                        return <Route key={art.ref}
                            path={art.group().routeTo + art.routeTo}
                            element={<art.page />} />
                    })}
                <Route path='/about' element={<About />} />
                <Route path='/todo' element={<Todo />} />
                <Route path='/*' element={<NotFound />} />
            </Route>
        </Routes>
    );
}