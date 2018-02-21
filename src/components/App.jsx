import React, { Component } from 'react'
import Header from './Header.jsx'
import ContestList from './ContestList.jsx'
import Contest from './Contest.jsx'
import * as api from '../api'

const pushState = (obj, url) => {
    window.history.pushState(obj, '', url)
}

class App extends Component {
    state = {
        pageHeader: 'Naming Contests',
        contests: this.props.initialContests
    }
    fetchContest = (contestId) => {  
        pushState(
            { currentContestId: contestId },
            `/contest/${contestId}`
        )
        api.fetchContest(contestId).then(contest => {
            this.setState({
                pageHeader: contest.contestName,
                currentContestId: contest.id,
                contests: {
                    ...this.state.contests,
                    [contest.id]: contest
                }
            })
        })
    }
    currentContent() {
        if (this.state.currentContestId) {
          return <Contest {...this.state.contests[this.state.currentContestId]} />;
        }
    
        return <ContestList
                onContestClick={this.fetchContest}
                contests={this.state.contests} />;
      }
    render() {
        return(
            <div className="App">
                <Header message={this.state.pageHeader}/>
                {this.currentContent()}
            </div>
        )
    }
}



export default App