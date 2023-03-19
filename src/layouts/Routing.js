import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout';

import HomePage from '../pages/Home';
import JdkReleases from '../pages/java/JdkReleases';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Rest from '../pages/architecture/Rest';
import Todo from '../pages/Todo';

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path='/rest' element={<Rest />} />
                <Route path='/jdk-releases' element={<JdkReleases />} />
                <Route path='/about' element={<About />} />
                <Route path='/todo' element={<Todo />} />
                <Route path='/*' element={<NotFound />} />
            </Route>
        </Routes>
    );
}