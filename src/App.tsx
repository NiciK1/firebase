import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from 'react-router-dom';
import Main from './pages/main/Main';
import Login from './components/login/Login';
import CreatePost from './pages/createPost/CreatePost';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Main />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/createpost' element={<CreatePost />}/>
      </Route>
    )
  )

  return (
    <div className="App">
      
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App;
