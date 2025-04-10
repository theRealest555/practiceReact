import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListStagiaire from './components/Stagiaire/ListStagiaire'
import DetailStagiaire from './components/Stagiaire/DetailStagiaire'
import Header from './components/Header/Header'
import { AjouterStagiaire } from './Redux/StagaireSlice'
import axios from 'axios'
import AddStagiaire from './components/Stagiaire/AddStagiaire'
import { useDispatch } from 'react-redux'

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get('https://retoolapi.dev/3QdIkd/devfs204')
            .then((res) => {
                dispatch(AjouterStagiaire(res.data));
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [dispatch]);
    return (
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path ='/' element={<ListStagiaire/>}/>
                    <Route path ='/stg-detail/:nom' element={<DetailStagiaire/>}/>
                    <Route path ='/add' element={<AddStagiaire/>}/>
                    <Route path ='/edit/:nom' element={<AddStagiaire/>}/>
                </Routes>
            </BrowserRouter>
    )
}
