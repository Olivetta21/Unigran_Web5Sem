import React from "react";

export default function Item({id, nome, img}) {

    return (
        <div class="item">
            <img src={img} alt="img0"/>
            <div> 
                <p> {nome} </p>
                <div>
                <p> R$ {id} </p>
                <div class="change-item">
                    <button> - </button>
                    <p> 1 </p>
                    <button> + </button>
                </div>
                </div>
            </div>
        </div>
    )
}