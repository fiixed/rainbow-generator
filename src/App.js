import React, { Component } from 'react'
import Card from './components/Card';

export default class App extends Component {
  constructor(props) {
    super(props);
    let initialState = {
        cards: [
            {hex: `#${Math.floor(Math.random()*16777215).toString(16)}`, isLocked: false},
            {hex: `#${Math.floor(Math.random()*16777215).toString(16)}`, isLocked: false},
            {hex: `#${Math.floor(Math.random()*16777215).toString(16)}`, isLocked: false},
            {hex: `#${Math.floor(Math.random()*16777215).toString(16)}`, isLocked: false},
            {hex: `#${Math.floor(Math.random()*16777215).toString(16)}`, isLocked: false},
            {hex: `#${Math.floor(Math.random()*16777215).toString(16)}`, isLocked: false},
        ]
    }
    this.state = initialState;
}
_randomize() {

}

_toggle() {

}
  render() {
    return (
      <div>
        <div>
        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this._randomize}>Randomize!</button>
        </div>
        <div className="card-group">
            <Card color={} toggle={this._toggle}/>
            <Card color={} toggle={this._toggle}/>
            <Card color={} toggle={this._toggle}/>
        </div>
        <div className="card-group">
        <Card color={} toggle={this._toggle}/>
        <Card color={} toggle={this._toggle}/>
        <Card color={} toggle={this._toggle}/>
        </div>
      </div>
    )
  }
}



