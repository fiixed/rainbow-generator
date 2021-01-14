import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className="card" >
                <div className="card-body">
                    <p className="card-text">{}</p>
                    <button type="button" className="btn btn-primary btn-lg"></button>
                </div>
            </div>
        )
    }
}
