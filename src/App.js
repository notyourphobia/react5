import React, { Component } from 'react'
import QuoteDisplayer from './Wisdom'
import Doer from './Doer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      character: 'LulName',
      image: 'https://picsum.photos/300/300',
      quote: 'LulQuote'
    }
  }

  getNewPerson() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(data => {
        this.setState({
          character: data[0].character,
          image: data[0].image,
          quote: data[0].quote
        })
      })
  }

  render() {
    return (
      <div className='App'>


        <QuoteDisplayer image={this.state.image} name={this.state.character} quote={this.state.quote} />
        <br/>
        <Doer doPls={() => this.getNewPerson()} />
      </div>
    )
  }
}

export default App
