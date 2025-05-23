export default function Produto({vlr, nome, img}) {

    return (
        <div className="item">
            <img src={img} alt="img0"/>
            <div> 
                <p> {nome} </p>
                <div>
                <p> R$ {vlr} </p>
                <div className="change-item">
                    <button> - </button>
                    <p> 1 </p>
                    <button> + </button>
                </div>
                </div>
            </div>
        </div>
    )
}