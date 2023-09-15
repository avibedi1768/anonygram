import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/jsx/Login';
import Signup from './Components/jsx/Signup';
import Main from './Components/jsx/Main';
import Profile from './Components/jsx/Profile';
// import Navigation from './Components/Navigation'; // Import the Navigation component


function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile/>}></Route>
        {/* Add other routes and components as needed */}
      </Routes>
    </div>
  );
}

export default App;
