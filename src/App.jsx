import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="pageholder">
      <div id="left">
        Ivan Luiz <br/> 802.495
      </div>
      <div id="right">   
        <div id="r-header">
          <p> Seu carrinho tem <strong> 5 itens </strong> </p>
          <span><strong class="close">&times;</strong></span>
        </div>
        <div id="r-carrinho">
          <div class="item">
            <img src="./imagens/img0.png" alt="img0"/>
            <div> 
              <p> Monitor Gamer Curvo 49 DQHD, 240Hz, 1ms, HDMI e DisplayPort, HDR 1000, FreeSync Premium, Ajuste de Altura - LC49G95TSSLXZD </p>
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
          
          <div id="r-bottom">
            <div>
              <p> Total: </p>
              <p> <strong> R$10.681,60 </strong> </p>
            </div>
            <div>
              <img src="./imagens/Tag.png" alt="tag"/>
              <p class="button purple"> Adicionar cupom </p>
            </div>
            <button> Finalizar compra </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
