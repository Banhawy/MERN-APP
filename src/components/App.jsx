import React, { Component } from 'react'
import Header from './Header.jsx'
import ContestPreview from './ContestPreview.jsx'

class App extends Component {
    state = {
        pageHeader: 'Naming Contests',
    }
    render() {
        return(
            <div className="App">
                <Header message={this.state.pageHeader}/>
                <div>
                {this.props.contests.map(contest => <ContestPreview {...contest}/>)}  
                </div>
            </div>
        )
    }
}



export default App