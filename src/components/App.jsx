import React, { Component } from 'react'
import Header from './Header.jsx'
import ContestList from './ContestList.jsx'

class App extends Component {
    state = {
        pageHeader: 'Naming Contests',
        contests: this.props.initialContests
    }
    render() {
        return(
            <div className="App">
                <Header message={this.state.pageHeader}/>
                <ContestList contests={this.state.contests}/>
            </div>
        )
    }
}



export default App