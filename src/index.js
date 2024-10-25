import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { TypeProvider } from './context/TypeProvider';
import { PlaceProvider } from './context/PlaceProvider';
import { RegionProvider } from './context/RegionProvider';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BrowserRouter><PlaceProvider><RegionProvider><TypeProvider><App/></TypeProvider></RegionProvider></PlaceProvider></BrowserRouter>);