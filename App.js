import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import PostPage from './PostPage';
import QuestionPage from './QuestionPage';
import { QuestionsProvider } from './QuestionsContext';
import './App.css';

function App() {
  return (
    <QuestionsProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post" element={<PostPage />} />
            <Route path="/questions" element={<QuestionPage />} />
          </Routes>
        </div>
      </Router>
    </QuestionsProvider>
  );
}

export default App;
