import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import DogList from './routes/DogList';
import Dog from './routes/Dog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<App />}>
               <Route path="doglist" element={<DogList />}>
                  <Route
                     index
                     element={
                        <main style={{ padding: "1rem" }}> 
                           <p>Select a dog</p>
                        </main>
                     } />
                  <Route path=":name" element={<Dog />} />
               </Route>
               <Route
                  path="*"
                  element={
                     <main style={{ padding: "1rem"}}>
                        <p>There's nothing to see here!</p>
                     </main>
                  } />
            </Route>
         </Routes>
      </BrowserRouter>
);

