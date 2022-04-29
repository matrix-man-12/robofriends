import React, { Component } from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY:'scroll', border:'3px solid skyblue', height:'500px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;