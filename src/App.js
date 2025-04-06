import React from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Navbar from './components/Navbar';
import Featured from './components/Featured';
import TipsPage from './components/TipsPage';
import FollowUs from './components/FollowUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Featured />
      <TipsPage />
      <FollowUs />
      <Footer />
    </div>
  );
}

export default App;
