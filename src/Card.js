import React from "react";
import 'tachyons'

const Card = (props) => {
    const {name , email, id} = props
    return (
        <div className="bg-light-red dib tc br3 pa2 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?200*200`} alt="robo pic"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>

        </div>
    )
}

export default Card