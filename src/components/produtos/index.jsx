import React from "react";
import { produtos } from "./produtos";

export default function Item() {

    return (
        <> {
            produtos.map((i) =>{
                <div class="item">
                    <img alt="img0"/>
                    <div> 
                        <p> {i.nome} </p>
                        <div>
                        <p> R$ 8.599,90 </p>
                        <div class="change-item">
                            <button> - </button>
                            <p> 1 </p>
                            <button> + </button>
                        </div>
                        </div>
                    </div>
                </div>
            })
        }
         </>
    )
}