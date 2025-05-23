import React from "react";

export default function BttnsHeader({setVisivel}) {
    return (
        <div id="bttns">
            <button onClick={() => setVisivel(true)}> Cart </button>
        </div>
    )
}