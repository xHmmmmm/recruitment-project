import logo from './logo.svg';
import './App.css';
import LoadingContextProvider from "./contexts/LoadingContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Users from './pages/Users';
import Posts from './pages/Posts';
import Todos from './pages/Todos';
import styled from 'styled-components';
import Navigation from "./Navigation";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60px 100%;
`

function App()
{
    return (
        <LoadingContextProvider>
            <Container>
                <Navigation />
                <Routes>
                    <Route path="/users" element={<Users />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/todos" element={<Todos />} />
                    <Route path="/" element={<Navigate to="/users" replace />} />
                </Routes>
            </Container>
        </LoadingContextProvider>
    );
}

export default App;
