import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Users from './pages/Users';
import Posts from './pages/Posts';
import Todos from './pages/Todos';
import styled from 'styled-components';
import Navigation from "./Navigation";
import PostPage from './pages/PostPage';


const Container = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 60px 1fr;
    height: 100%;
    overflow: hidden;
`

const Content = styled.main`
    overflow-y: scroll;
    padding: 1rem;
`

function App()
{
    return (
        <Container>
            <Navigation />
            <Content>
                <Routes>
                    <Route path="/users" element={<Users />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/posts/:id" element={<PostPage />} />
                    <Route path="/todos" element={<Todos />} />
                    <Route path="/" element={<Navigate to="/users" replace />} />
                </Routes>
            </Content>
        </Container>
    );
}

export default App;
