import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Filme from './pages/Filme';
import Favoritos from './pages/Favoritos';

import Erro from './pages/Erro';

import Header from './components/Header';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={ <Home/>} />
            <Route path="/Filme/:id" element={ <Filme/>} />
            <Route path="/Favoritos" element={ <Favoritos/>} />


            <Route path="*" element={ <Erro/> }/>

        </Routes>
        </BrowserRouter>

    )
}

export default RoutesApp;