const Card = (props) => {
    let { card, toggle } = props;
    let { hex, isLocked } = card;

        return (
            <div className="card" >
                <div className="card-body" style={{backgroundColor: hex}}>
                    <p className="card-text">{hex}</p>
                    <button type="button" className="btn btn-primary btn-lg" onClick={toggle}>{isLocked ? "UNLOCK" : "LOCK"}</button>
                </div>
            </div>
        );
    }

export default Card;