import React from 'react';
import ReactDOM from 'react-dom'

const Header = (props) => {
    return(
        <h2 className='text-center'>
            {props.message}
            </h2>
    )
}
const App = () => {
    return(
        <div>
            <Header message="Naming Contest"/>
            <div>
                ...
            </div>
        </div>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
)