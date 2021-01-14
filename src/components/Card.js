import React, { Component } from 'react'

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color : {
                hex: props.color.hex,
                isLocked: props.color.isLocked
            },
            toggle: props.toggle
        }
    }
    render() {
        return (
            <div className="card" >
                <div className="card-body" style={{backgroundColor: this.hex}}>
                    <p className="card-text">{this.hex}</p>
                    <button type="button" className="btn btn-primary btn-lg">{this.isLocked ? "UNLOCK" : "LOCK"}</button>
                </div>
            </div>
        )
    }
}
