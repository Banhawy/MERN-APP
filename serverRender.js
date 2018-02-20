//fetch data from api
import axios from 'axios'
import config from './config'
import React from 'react' 
import ReactDOMServer from 'react-dom/server'
import App from './src/components/App.jsx'

const serverRender =  () =>
axios.get(`${config.serverUrl}/api/contests`)
    .then(res => {
        return {
            initialMarkup: ReactDOMServer.renderToString(<App initialContests={res.data.contests}/>),
            initialData: res.data.contests
        }
    })

export default serverRender