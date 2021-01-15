import React, { Component } from 'react'
import Card from './components/Card';

export default class App extends Component {
  constructor(props) {
    super(props);
    let initialState = {
        cards: [
          {hex: "#54c06c", isLocked: false},
          {hex: "#e4d623", isLocked: false},
          {hex: "#b5453f", isLocked: false},
          {hex: "#e8630c", isLocked: false},
          {hex: "#5d1170", isLocked: false},
          {hex: "#5d1170", isLocked: false}
        ]
    }
    this.state = initialState;
}
toggleLock(i) {
  let newCards = this.state.cards.map((card, index) => {
      if (i === index) {
          return {
              ...card,
              isLocked: !card.isLocked
          }
      } else {
          return card
      }
  })

  this.setState({
      cards: newCards
  });
}

randomize() {
  let newCards = this.state.cards.map(card => {
      if (!card.isLocked) {
          return {
              ...card,
              hex: '#' + Math.floor(Math.random() * 16777215).toString(16)
          }
      } else {
          return card
      }
  })

  this.setState({
      cards: newCards
  });
}
  render() {
    return (
      <div>
        <div>
        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.randomize()}>Randomize!</button>
        </div>
        <div className="card-group">
        {
                        this.state.cards.map((card, i) => <Card card={card} key={i} toggle={() => this.toggleLock(i)}/>)
                    }
        </div>
        {/* <div className="card-group">
        <Card color={} toggle={this._toggle}/>
        <Card color={} toggle={this._toggle}/>
        <Card color={} toggle={this._toggle}/>
        </div> */}
      </div>
    )
  }
}



