import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import RecipeOverview from './components/RecipeOverview';
import RecipeDetail from './components/RecipeDetail';

const App = () => {
  return (
    <Router>
      <Header />
      <Main>
        <Routes>
          <Route exact path="/" element={<RecipeOverview />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </Main>
      <Footer />
    </Router>
  );
};

export default App;
