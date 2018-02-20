import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App.jsx'

ReactDOM.hydrate(
    <App initialContests={window.initialData} />,
    document.getElementById('root')
)