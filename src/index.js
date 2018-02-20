import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import data from "./testData.json";

ReactDOM.render(
    <App contests={data.contests} />,
    document.getElementById('root')
)