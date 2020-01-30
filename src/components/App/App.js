import React from 'react'
import style from './App.css'
class App  extends React.Component{
    state = {
        name: 'roman'
    }
    onClickCount = () => {
        console.log('hey')
    }
    render () {
        return(
            <div className={style.app}>
                <h1 onClick={this.onClickCount}>{this.state.name}</h1>
            </div>
        )
    }

};

export default App